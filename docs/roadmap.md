# Roadmap inicial

## Concluído

- Repositório privado `organizae` criado.
- Regras contra Lovable Cloud registradas.
- Projeto Supabase auditado.
- Migration inicial aplicada (schema, RLS, categorias, templates).
- Alerta de segurança inicial (função pública) resolvido.
- Bucket privado `private-documents` criado com policies por usuário.
- Trigger de provisionamento automático de `profiles` e `user_settings` criado.
- Primeiro usuário de teste criado e confirmado.

## Pendências de segurança

- Ativar proteção contra senha vazada (HaveIBeenPwned) em Authentication > Password Security.
- Configurar SMTP customizado antes do lançamento público.

## Próximas tarefas

1. Gerar tipos TypeScript definitivos a partir do schema atual.
2. Criar estrutura Vite/React no repositório.
3. Conectar o Lovable ao GitHub sem Lovable Cloud.
4. Construir o MVP visual (dashboard, cadastro, detalhes, configurações).
5. Implementar fluxo de login e cadastro no frontend.
6. Implementar upload e download de anexos usando o bucket privado.
7. Criar Edge Function segura para geração de documentos com IA.
8. Testar segurança, compartilhamento e backup.
9. Configurar SMTP customizado e revisar templates de e-mail.
10. Preparar publicação do MVP.
