# Segurança e privacidade

## Estado atual

- RLS ativado em todas as tabelas públicas.
- Função `public.rls_auto_enable()` corrigida (execução pública revogada).
- Bucket privado `private-documents` criado, com policies restringindo acesso ao próprio usuário.
- Trigger de provisionamento automático usando `SECURITY DEFINER` com execução pública revogada.
- Proteção contra senha vazada (HaveIBeenPwned) identificada como pendência pelo advisor de segurança do Supabase; deve ser ativada manualmente em Authentication > Password Security.

## Regras

- Documentos ficam em Storage privado, nunca em bucket público.
- URLs de arquivos devem ser temporárias e assinadas (`createSignedUrl`).
- O frontend usa somente a publishable key.
- Service role key nunca deve ser exposta no navegador.
- Dados de documentos não devem aparecer em logs.
- Toda alteração de schema deve passar por migration.
- IA só pode receber dados após ação explícita do usuário.
- Uploads devem validar MIME type, tamanho e propriedade do documento.
- E-mail transacional (SMTP customizado) é uma pendência para antes do lançamento público; o serviço padrão do Supabase não deve ser usado com usuários reais.

## Pendências

- Ativar proteção contra senha vazada no painel do Supabase.
- Configurar SMTP customizado (Resend, Postmark, SendGrid ou SES) antes do lançamento.
- Revisar RLS após cada nova tabela.
