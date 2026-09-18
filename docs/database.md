# Banco de dados

## Estado

O schema ainda não foi criado. A primeira migration será definida após a auditoria de permissões e do estado atual do projeto Supabase.

## Entidades planejadas

- `profiles`
- `document_categories`
- `documents`
- `document_attachments`
- `document_templates`
- `generated_documents`
- `user_settings`
- `audit_events`

## Regras

- Migrations ficam em `supabase/migrations/`.
- Alterações no banco não devem ser feitas sem registro no GitHub.
- Tabelas de usuário devem ter `user_id` e políticas RLS.
- Arquivos ficam no Storage; o banco guarda metadados.
- Nenhuma chave secreta será armazenada no frontend.
