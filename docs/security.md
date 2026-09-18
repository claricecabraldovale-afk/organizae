# Segurança e privacidade

## Estado atual

- RLS ativado em todas as tabelas públicas criadas.
- Alerta da função `public.rls_auto_enable()` corrigido revogando sua execução para `anon`, `authenticated` e `public`.
- Auditoria de segurança do Supabase sem lints após a migration inicial.
- Nenhum bucket de documentos criado ainda.

## Regras

- Documentos devem ficar em Storage privado.
- URLs de arquivos devem ser temporárias e assinadas.
- O frontend usará somente a publishable key.
- Service role key nunca deve ser exposta no navegador.
- Dados de documentos não devem aparecer em logs.
- Toda alteração de schema deve passar por migration.
- IA só poderá receber dados após ação explícita do usuário.
- Uploads devem validar MIME type, tamanho e propriedade do documento.

## Próximos controles

- Criar bucket privado `private-documents`.
- Criar policies de Storage baseadas no primeiro segmento do caminho do arquivo, usando o `auth.uid()`.
- Configurar autenticação por e-mail e recuperação de senha.
- Revisar RLS após cada nova tabela.
