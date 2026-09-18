# Arquitetura do Organizaê

## Fonte de verdade

- Código: GitHub `claricecabraldovale-afk/organizae`.
- Banco, Auth, Storage e Functions: Supabase externo `zwakszslarlombcdrhvj`.
- Interface: código React/TypeScript sincronizado com GitHub e desenvolvido no Lovable.
- Lovable Cloud: proibido.

## Pipeline

1. Requisito e análise.
2. Aprovação da decisão.
3. Alteração versionada no GitHub.
4. Migration aplicada no Supabase quando necessário.
5. Teste e revisão de segurança.
6. Integração da interface.

## Camadas

- `src/integrations/supabase`: cliente e tipos.
- `src/services`: acesso a dados e regras de negócio.
- `src/features`: funcionalidades por domínio.
- `supabase/migrations`: histórico do schema.
- `supabase/functions`: código server-side futuro.
