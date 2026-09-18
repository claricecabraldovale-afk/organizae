import { supabase } from '../integrations/supabase/client';

export async function listCategories() {
  return supabase.from('document_categories').select('*').order('name');
}
