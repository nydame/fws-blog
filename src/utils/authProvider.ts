import { supabaseAuthProvider } from 'ra-supabase';
import { supabaseClient } from './supabase';

export const authProvider = supabaseAuthProvider(supabaseClient, {
  getIdentity: async (user) => {
    const { data, error } = await supabaseClient
      .from('userprofile')
      .select('id, user_id, name')
      .match({ email: user.email })
      .single();

    if (!data || error) {
      throw new Error();
    }

    return {
      id: data.user_id,
      fullName: data.name,
    };
  },
});