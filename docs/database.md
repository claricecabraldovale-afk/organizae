# Banco de dados

## Projeto

- Projeto: Organizae
- Referência: `zwakszslarlombcdrhvj`
- Região: `sa-east-1`

## Migrations aplicadas

1. `20260918153018_initial_schema_and_security`
2. `20260918154103_storage_private_documents`
3. `20260918_auto_provision_user_profile`

## Tabelas

- `profiles`
- `document_categories`
- `documents`
- `document_attachments`
- `document_templates`
- `generated_documents`
- `user_settings`
- `audit_events`

Todas as tabelas possuem RLS ativado. As policies limitam os dados ao usuário autenticado, com exceção das categorias e templates de sistema, que podem ser lidos por qualquer usuário autenticado.

## Provisionamento automático

Um trigger (`on_auth_user_created`) executa a função `public.handle_new_user()` sempre que um novo usuário é criado em `auth.users`. Essa função cria automaticamente:

- Uma linha em `public.profiles`.
- Uma linha em `public.user_settings` com valores padrão.

A função é `SECURITY DEFINER`, mas sua execução foi revogada para `anon`, `authenticated` e `public`, sendo chamada apenas pelo trigger.

## Storage

- Bucket privado: `private-documents`.
- Limite por arquivo: 10 MB.
- Tipos aceitos: `image/jpeg`, `image/png`, `image/webp`, `application/pdf`.
- Caminho esperado: `private-documents/{user_id}/{document_id}/{arquivo}`.
- Policies de storage restringem insert, select, update e delete ao próprio usuário, usando o primeiro segmento do caminho do arquivo.

## Categorias e templates

A migration inicial inseriu 14 categorias padrão e 7 templates de documentos gerados por IA.

## Usuários

- Primeiro usuário de teste criado via painel do Supabase (Auto Confirm User), sem depender do serviço de e-mail padrão.

## Regras

- Toda alteração de schema deve ser criada como arquivo SQL versionado e aplicada após revisão.
- Não fazer alterações destrutivas diretamente pelo Table Editor.
- Não criar usuários diretamente via SQL bruto; usar o painel ou a Auth Admin API.
