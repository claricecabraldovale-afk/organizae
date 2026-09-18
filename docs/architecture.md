# Arquitetura do Organizaê

## Princípios

- GitHub é a fonte oficial do código.
- Supabase externo é o backend oficial.
- Lovable será usado apenas para desenvolvimento da aplicação.
- Lovable Cloud é proibido.
- Mudanças importantes devem ser planejadas, revisadas e versionadas.

## Camadas

- Frontend: React, TypeScript e PWA.
- Backend: Supabase Auth, PostgreSQL, Storage e Edge Functions.
- Versionamento: GitHub.
- Publicação: serviço externo a ser escolhido posteriormente.

## Fluxo de mudança

1. Definir o requisito.
2. Avaliar impacto e segurança.
3. Criar ou atualizar arquivos no GitHub.
4. Aplicar migrations no Supabase somente após aprovação.
5. Testar.
6. Registrar a decisão.
