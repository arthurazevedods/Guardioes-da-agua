# Deploy Instructions

## Para Vercel
O arquivo `vercel.json` já está configurado para redirecionar todas as rotas para `index.html`.

## Para Netlify
O arquivo `netlify.toml` já está configurado para redirecionar todas as rotas para `index.html`.

## Para outros provedores
Use o arquivo `public/_redirects` que redireciona todas as rotas para `index.html`.

## Comandos para build e deploy

```bash
# Instalar dependências
npm install

# Build para produção
npm run build

# Preview local
npm run preview
```

## Verificação
Após o deploy, teste todas as rotas:
- `/` - Página inicial
- `/artigos` - Página de artigos
- `/documentarios` - Página de documentários
- `/sobrenos` - Página sobre nós
- `/contato` - Página de contato
- `/artigo/1` - Artigo específico
- `/artigo/2` - Artigo específico
- `/artigo/7` - Artigo específico

Todas as rotas devem funcionar corretamente em produção.
