# Segurança e privacidade

O Organizaê tratará documentos pessoais e deve aplicar segurança desde o início.

## Regras

- Aplicar RLS em todas as tabelas com dados pessoais.
- Cada usuário só pode acessar seus próprios registros.
- Usar buckets privados para documentos.
- Usar URLs assinadas e temporárias para arquivos.
- Validar tipo e tamanho dos uploads.
- Não registrar conteúdo de documentos em logs.
- Não expor chaves secretas no frontend.
- Permitir exclusão dos dados pelo usuário.
- Planejar exportação e backup seguro.
- Solicitar consentimento antes de enviar dados para IA.

## Revisão

Após cada alteração relevante no banco, executar revisão de segurança e performance no Supabase.
