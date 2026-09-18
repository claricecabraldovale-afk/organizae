export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; full_name: string | null; avatar_url: string | null; created_at: string; updated_at: string };
        Insert: { id: string; full_name?: string | null; avatar_url?: string | null; created_at?: string; updated_at?: string };
        Update: { id?: string; full_name?: string | null; avatar_url?: string | null; created_at?: string; updated_at?: string };
      };
      document_categories: {
        Row: { id: string; user_id: string | null; name: string; slug: string; icon: string | null; color: string | null; is_system: boolean; created_at: string };
        Insert: { id?: string; user_id?: string | null; name: string; slug: string; icon?: string | null; color?: string | null; is_system?: boolean; created_at?: string };
        Update: { id?: string; user_id?: string | null; name?: string; slug?: string; icon?: string | null; color?: string | null; is_system?: boolean; created_at?: string };
      };
      documents: {
        Row: { id: string; user_id: string; category_id: string | null; title: string; document_number: string | null; issuer: string | null; issue_date: string | null; expiration_date: string | null; description: string | null; status: 'active' | 'expired' | 'archived'; created_at: string; updated_at: string; deleted_at: string | null };
        Insert: { id?: string; user_id: string; category_id?: string | null; title: string; document_number?: string | null; issuer?: string | null; issue_date?: string | null; expiration_date?: string | null; description?: string | null; status?: 'active' | 'expired' | 'archived'; created_at?: string; updated_at?: string; deleted_at?: string | null };
        Update: { id?: string; user_id?: string; category_id?: string | null; title?: string; document_number?: string | null; issuer?: string | null; issue_date?: string | null; expiration_date?: string | null; description?: string | null; status?: 'active' | 'expired' | 'archived'; created_at?: string; updated_at?: string; deleted_at?: string | null };
      };
      document_attachments: {
        Row: { id: string; document_id: string; user_id: string; storage_path: string; file_name: string; mime_type: string; file_size: number; checksum: string | null; created_at: string };
        Insert: { id?: string; document_id: string; user_id: string; storage_path: string; file_name: string; mime_type: string; file_size: number; checksum?: string | null; created_at?: string };
        Update: { id?: string; document_id?: string; user_id?: string; storage_path?: string; file_name?: string; mime_type?: string; file_size?: number; checksum?: string | null; created_at?: string };
      };
      document_templates: {
        Row: { id: string; name: string; slug: string; description: string | null; prompt_key: string; is_active: boolean; created_at: string };
        Insert: { id?: string; name: string; slug: string; description?: string | null; prompt_key: string; is_active?: boolean; created_at?: string };
        Update: { id?: string; name?: string; slug?: string; description?: string | null; prompt_key?: string; is_active?: boolean; created_at?: string };
      };
      generated_documents: {
        Row: { id: string; user_id: string; template_id: string | null; title: string; content: string; status: 'draft' | 'final' | 'archived'; created_at: string; updated_at: string };
        Insert: { id?: string; user_id: string; template_id?: string | null; title: string; content: string; status?: 'draft' | 'final' | 'archived'; created_at?: string; updated_at?: string };
        Update: { id?: string; user_id?: string; template_id?: string | null; title?: string; content?: string; status?: 'draft' | 'final' | 'archived'; created_at?: string; updated_at?: string };
      };
      user_settings: {
        Row: { user_id: string; theme: 'light' | 'dark' | 'system'; biometric_enabled: boolean; inactivity_lock_minutes: number; created_at: string; updated_at: string };
        Insert: { user_id: string; theme?: 'light' | 'dark' | 'system'; biometric_enabled?: boolean; inactivity_lock_minutes?: number; created_at?: string; updated_at?: string };
        Update: { user_id?: string; theme?: 'light' | 'dark' | 'system'; biometric_enabled?: boolean; inactivity_lock_minutes?: number; created_at?: string; updated_at?: string };
      };
      audit_events: {
        Row: { id: string; user_id: string | null; event_type: string; entity_type: string | null; entity_id: string | null; metadata: Json; created_at: string };
        Insert: { id?: string; user_id?: string | null; event_type: string; entity_type?: string | null; entity_id?: string | null; metadata?: Json; created_at?: string };
        Update: { id?: string; user_id?: string | null; event_type?: string; entity_type?: string | null; entity_id?: string | null; metadata?: Json; created_at?: string };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
