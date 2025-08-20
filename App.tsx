import React, { useState, useEffect } from 'react';
import { UserProfile } from './components/UserProfile';
import { Home } from './components/Home';
import { OilPrompt } from './components/OilPrompt';
import { OilDetail } from './components/OilDetail';
import { OilsList } from './components/OilsList';
import { BottomNavigation } from './components/BottomNavigation';
import { LoadingScreen } from './components/LoadingScreen';
import { Home as HomeIcon, User, Search, List } from 'lucide-react';

export type Oil = {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  benefits: string[];
  uses: string[];
  precautions: string[];
  imageUrl: string;
  plantImageUrl: string;
  origin: string;
  extractionMethod: string;
  aromaNotes: string[];
  blendsWith: string[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  preferences: string[];
  concerns: string[];
  allergies: string[];
};

export type CurrentView = 'home' | 'profile' | 'prompt' | 'oils' | 'oil-detail';

export default function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home');
  const [selectedOil, setSelectedOil] = useState<Oil | null>(null);
  const [recommendedOils, setRecommendedOils] = useState<Oil[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Default user for demo purposes
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    preferences: ['Relaxation', 'Sleep', 'Stress Relief'],
    concerns: ['Anxiety', 'Insomnia'],
    allergies: []
  });

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSignOut = () => {
    // For demo purposes, just show a message
    alert('Sign out functionality will be available in the full version!');
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const handleViewOil = (oil: Oil) => {
    setSelectedOil(oil);
    setCurrentView('oil-detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedOil(null);
  };

  const handleRecommendationsGenerated = (oils: Oil[], prompt: string, suggestions: string[]) => {
    setRecommendedOils(oils);
    setCurrentView('oils');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} user={user} onSignOut={handleSignOut} />;
      case 'profile':
        return <UserProfile user={user} onUpdateUser={handleUpdateUser} onBack={handleBackToHome} onSignOut={handleSignOut} />;
      case 'prompt':
        return <OilPrompt onRecommendations={handleRecommendationsGenerated} onBack={handleBackToHome} />;
      case 'oils':
        return <OilsList oils={recommendedOils} onViewOil={handleViewOil} onBack={handleBackToHome} />;
      case 'oil-detail':
        return selectedOil && <OilDetail oil={selectedOil} onBack={() => setCurrentView('oils')} accessToken={null} />;
      default:
        return <Home onNavigate={setCurrentView} user={user} onSignOut={handleSignOut} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <main className="flex-1 pb-20">
        {renderCurrentView()}
      </main>
      
      <BottomNavigation 
        currentView={currentView} 
        onNavigate={setCurrentView}
        items={[
          { id: 'home', icon: HomeIcon, label: 'Home' },
          { id: 'prompt', icon: Search, label: 'Find Oils' },
          { id: 'oils', icon: List, label: 'My Oils' },
          { id: 'profile', icon: User, label: 'Profile' }
        ]}
      />
    </div>
  );
}