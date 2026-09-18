# Organizaê

Carteira digital para guardar, organizar e encontrar documentos pessoais.

## Identidade técnica

- Marca: Organizaê
- Identificador técnico: `organizae`
- Repositório oficial: `claricecabraldovale-afk/organizae`

## Regra de infraestrutura

O projeto não utilizará Lovable Cloud. O backend oficial será Supabase externo, com código versionado no GitHub.

## Estado atual

Estrutura técnica inicial. A interface, o banco e as integrações serão construídos em etapas aprovadas.

## Estrutura

- `docs/`: decisões e regras do projeto.
- `supabase/`: migrations e Edge Functions.
- `src/`: código da aplicação.
- `public/`: arquivos públicos e recursos PWA.

## Fluxo

1. Planejar e revisar.
2. Versionar no GitHub.
3. Aplicar migrations no Supabase após aprovação.
4. Construir a interface sem Lovable Cloud.
5. Testar antes de publicar.
