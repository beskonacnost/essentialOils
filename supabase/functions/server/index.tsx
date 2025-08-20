import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use('*', logger(console.log));

// Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Types
interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: string[];
  concerns: string[];
  allergies: string[];
  createdAt: string;
  updatedAt: string;
}

interface SearchHistory {
  id: string;
  userId: string;
  prompt: string;
  suggestions: string[];
  recommendations: string[];
  timestamp: string;
}

interface UserFavorite {
  id: string;
  userId: string;
  oilId: string;
  notes?: string;
  createdAt: string;
}

// Helper function to validate authorization
async function validateUser(request: Request) {
  const accessToken = request.headers.get('Authorization')?.split(' ')[1];
  if (!accessToken) {
    return { error: 'No authorization token provided', status: 401 };
  }

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user?.id) {
    return { error: 'Invalid authorization token', status: 401 };
  }

  return { user, error: null };
}

// Routes

// Health check
app.get('/make-server-b37477dd/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// User signup
app.post('/make-server-b37477dd/auth/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log('Signup error:', error);
      return c.json({ error: `Failed to create user: ${error.message}` }, 400);
    }

    // Create user profile in KV store
    const userProfile: UserProfile = {
      id: data.user.id,
      name,
      email,
      preferences: [],
      concerns: [],
      allergies: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await kv.set(`user_profile:${data.user.id}`, userProfile);

    return c.json({ 
      user: data.user, 
      profile: userProfile,
      message: 'User created successfully' 
    });
  } catch (error) {
    console.log('Signup error:', error);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// Get user profile
app.get('/make-server-b37477dd/user/profile', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const profile = await kv.get(`user_profile:${authResult.user!.id}`);
    if (!profile) {
      // Create default profile if it doesn't exist
      const defaultProfile: UserProfile = {
        id: authResult.user!.id,
        name: authResult.user!.user_metadata?.name || 'User',
        email: authResult.user!.email!,
        preferences: [],
        concerns: [],
        allergies: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await kv.set(`user_profile:${authResult.user!.id}`, defaultProfile);
      return c.json({ profile: defaultProfile });
    }

    return c.json({ profile });
  } catch (error) {
    console.log('Get profile error:', error);
    return c.json({ error: 'Failed to retrieve user profile' }, 500);
  }
});

// Update user profile
app.put('/make-server-b37477dd/user/profile', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const { name, preferences, concerns, allergies } = await c.req.json();
    
    const existingProfile = await kv.get(`user_profile:${authResult.user!.id}`);
    
    const updatedProfile: UserProfile = {
      id: authResult.user!.id,
      name: name || existingProfile?.name || 'User',
      email: authResult.user!.email!,
      preferences: preferences || [],
      concerns: concerns || [],
      allergies: allergies || [],
      createdAt: existingProfile?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await kv.set(`user_profile:${authResult.user!.id}`, updatedProfile);

    return c.json({ profile: updatedProfile, message: 'Profile updated successfully' });
  } catch (error) {
    console.log('Update profile error:', error);
    return c.json({ error: 'Failed to update user profile' }, 500);
  }
});

// Save search history
app.post('/make-server-b37477dd/search/history', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const { prompt, suggestions, recommendations } = await c.req.json();
    
    const searchId = crypto.randomUUID();
    const searchRecord: SearchHistory = {
      id: searchId,
      userId: authResult.user!.id,
      prompt: prompt || '',
      suggestions: suggestions || [],
      recommendations: recommendations || [],
      timestamp: new Date().toISOString()
    };

    await kv.set(`search_history:${authResult.user!.id}:${searchId}`, searchRecord);
    
    return c.json({ message: 'Search history saved', searchId });
  } catch (error) {
    console.log('Save search history error:', error);
    return c.json({ error: 'Failed to save search history' }, 500);
  }
});

// Get user search history
app.get('/make-server-b37477dd/search/history', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const searchHistory = await kv.getByPrefix(`search_history:${authResult.user!.id}:`);
    
    // Sort by timestamp descending
    const sortedHistory = searchHistory.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return c.json({ history: sortedHistory });
  } catch (error) {
    console.log('Get search history error:', error);
    return c.json({ error: 'Failed to retrieve search history' }, 500);
  }
});

// Add oil to favorites
app.post('/make-server-b37477dd/favorites', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const { oilId, notes } = await c.req.json();
    
    if (!oilId) {
      return c.json({ error: 'Oil ID is required' }, 400);
    }

    const favoriteId = crypto.randomUUID();
    const favorite: UserFavorite = {
      id: favoriteId,
      userId: authResult.user!.id,
      oilId,
      notes: notes || '',
      createdAt: new Date().toISOString()
    };

    await kv.set(`favorite:${authResult.user!.id}:${oilId}`, favorite);
    
    return c.json({ message: 'Oil added to favorites', favorite });
  } catch (error) {
    console.log('Add favorite error:', error);
    return c.json({ error: 'Failed to add oil to favorites' }, 500);
  }
});

// Remove oil from favorites
app.delete('/make-server-b37477dd/favorites/:oilId', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const oilId = c.req.param('oilId');
    await kv.del(`favorite:${authResult.user!.id}:${oilId}`);
    
    return c.json({ message: 'Oil removed from favorites' });
  } catch (error) {
    console.log('Remove favorite error:', error);
    return c.json({ error: 'Failed to remove oil from favorites' }, 500);
  }
});

// Get user favorites
app.get('/make-server-b37477dd/favorites', async (c) => {
  const authResult = await validateUser(c.req);
  if (authResult.error) {
    return c.json({ error: authResult.error }, authResult.status);
  }

  try {
    const favorites = await kv.getByPrefix(`favorite:${authResult.user!.id}:`);
    
    // Sort by creation date descending
    const sortedFavorites = favorites.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json({ favorites: sortedFavorites });
  } catch (error) {
    console.log('Get favorites error:', error);
    return c.json({ error: 'Failed to retrieve favorites' }, 500);
  }
});

Deno.serve(app.fetch);