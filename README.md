# Portfólio de Jeremias Kalebe

Portfólio pessoal em React, compilado com Vite.

## Desenvolvimento

Use Node.js 24.15 ou uma versão mais recente da série 24 e npm.

```sh
npm ci
npm start
```

Execute `npm test` para rodar o teste do portfólio. Use `npm run build`
para gerar o site em `dist/` e `npm run preview` para conferir o resultado localmente.

## Publicação

Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
O workflow roda ao enviar alterações para `master` ou ao iniciá-lo manualmente
na aba **Actions**. Ele instala as dependências, roda o teste e publica `dist/`
como artefato. As pastas `build/` e `dist/` são ignoradas pelo Git.
