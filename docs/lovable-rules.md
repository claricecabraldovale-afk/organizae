# Regras obrigatórias do Organizaê

## Proibição do Lovable Cloud

- Não utilizar Lovable Cloud.
- Não criar banco no Lovable Cloud.
- Não criar autenticação no Lovable Cloud.
- Não criar armazenamento de arquivos no Lovable Cloud.
- Não criar Edge Functions no Lovable Cloud.
- Não migrar dados, lógica ou infraestrutura para Lovable Cloud.
- Não substituir o Supabase externo por serviços proprietários do Lovable.

## Infraestrutura oficial

- O código oficial deve permanecer no GitHub.
- O backend oficial é o projeto Supabase externo aprovado.
- O banco oficial é o PostgreSQL do Supabase.
- Os arquivos oficiais ficam no Supabase Storage.
- Funções server-side ficam nas Supabase Edge Functions.

## Segurança

- Nunca expor chaves secretas no frontend.
- Nunca colocar service role key no navegador.
- Toda tabela com dados de usuário deve usar RLS.
- Toda alteração de schema deve ser feita por migration versionada.
- Nenhuma alteração destrutiva deve ser feita sem aprovação explícita.

## Desenvolvimento

- Manter serviços e componentes separados.
- Usar `.env.example` para documentar variáveis.
- Não gravar credenciais reais no repositório.
- Não alterar a infraestrutura sem autorização.
