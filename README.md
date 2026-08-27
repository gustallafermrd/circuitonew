This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://next.js.org/docs/app/building-your-application/deploying) for more details.

## Deploy manual a Git

Para sincronizar cambios locales con el repositorio remoto:

```bash
# 1. Ver el estado de los cambios
git status

# 2. Agregar archivos modificados (o git add . para todos)
git add .

# 3. Commitear con mensaje descriptivo
git commit -m "descripción de los cambios"

# 4. Subir al repositorio remoto
git push origin main
```

### Flujo típico tras cambios en Joomla

Si actualizaste contenido en Joomla y necesitas regenerar el sitio estático:

```bash
# 1. Regenerar el build (si usas export estático)
npm run build

# 2. Verificar que todo compile correctamente
npm run lint

# 3. Commitear y pushear
git add .
git commit -m "rebuild: reflejar cambios en Joomla DB"
git push origin main
```

El deploy en Vercel se disparará automáticamente al hacer push a `main`.
