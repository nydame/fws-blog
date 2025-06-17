import { supabaseDataProvider } from 'ra-supabase';
import { supabaseClient } from './supabase';

export const dataProvider = supabaseDataProvider({
  instanceUrl: import.meta.env.PUBLIC_SUPABASE_URL,
  apiKey: import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  supabaseClient,
});