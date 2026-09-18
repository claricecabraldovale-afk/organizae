# Banco de dados

## Projeto

- Projeto: Organizae
- Referência: `zwakszslarlombcdrhvj`
- Região: `sa-east-1`
- Migration aplicada: `20260918153018_initial_schema_and_security`

## Tabelas

- `profiles`
- `document_categories`
- `documents`
- `document_attachments`
- `document_templates`
- `generated_documents`
- `user_settings`
- `audit_events`

Todas as tabelas possuem RLS ativado. As policies limitam os dados ao usuário autenticado, com exceção das categorias e templates de sistema que podem ser lidos por usuários autenticados.

## Categorias e templates

A migration inicial inseriu 14 categorias e 7 templates de documentos.

## Arquivos

Os metadados dos anexos ficam em `document_attachments`. Os arquivos binários serão armazenados posteriormente em bucket privado do Supabase Storage.

## Migrations

Toda alteração de schema deve ser criada como arquivo SQL versionado e aplicada após revisão. Não fazer alterações destrutivas diretamente pelo Table Editor.
