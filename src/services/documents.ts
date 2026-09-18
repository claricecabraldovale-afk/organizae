import { supabase } from '../integrations/supabase/client';

export async function listDocuments() {
  return supabase
    .from('documents')
    .select('*, category:document_categories(*)')
    .is('deleted_at', null)
    .order('updated_at', { ascending: false });
}

export async function createDocument(input: {
  title: string;
  category_id?: string | null;
  document_number?: string | null;
  issuer?: string | null;
  issue_date?: string | null;
  expiration_date?: string | null;
  description?: string | null;
}) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) throw userError ?? new Error('Usuário não autenticado.');
  return supabase.from('documents').insert({ ...input, user_id: userData.user.id }).select().single();
}

export async function deleteDocument(id: string) {
  return supabase.from('documents').update({ deleted_at: new Date().toISOString() }).eq('id', id);
}
