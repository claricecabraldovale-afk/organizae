import { supabase } from '../integrations/supabase/client';

const BUCKET = 'private-documents';

export async function uploadAttachment(userId: string, documentId: string, file: File) {
  const path = `${userId}/${documentId}/${crypto.randomUUID()}-${file.name}`;
  const upload = await supabase.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type });
  if (upload.error) return { data: null, error: upload.error };
  return supabase.from('document_attachments').insert({
    document_id: documentId,
    user_id: userId,
    storage_path: path,
    file_name: file.name,
    mime_type: file.type,
    file_size: file.size,
  }).select().single();
}

export async function createAttachmentDownloadUrl(path: string, expiresIn = 300) {
  return supabase.storage.from(BUCKET).createSignedUrl(path, expiresIn);
}
