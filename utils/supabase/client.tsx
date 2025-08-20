import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type AuthSession = {
  access_token: string;
  user: AuthUser;
};