import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { pelelajsPlugin } from 'vite-plugin-pelelajs'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  site: isGitHubPages ? 'https://dantetripodi.github.io' : undefined,
  base: isGitHubPages ? '/pelela-docs' : undefined,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'PelelaJS',
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        // La superficie de código es oscura en ambos modos; usamos tokens oscuros legibles.
        themes: ['github-dark', 'github-dark'],
      },
      sidebar: [
        {
          label: 'Empezar',
          items: [
            { label: 'Inicio', slug: '' },
            { label: 'Antes de Pelela', slug: 'maquetado' },
            { label: 'Instalación', slug: 'fundamentos/instalacion' },
          ],
        },
          {
            label: 'Fundamentos',
            items: [
              { label: 'Modelo mental', slug: 'fundamentos/modelo-mental' },
              { label: 'Bindings', slug: 'fundamentos/bindings' },
              { label: 'Eventos', slug: 'fundamentos/eventos' },
              { label: 'Renderizado condicional', slug: 'fundamentos/renderizado-condicional' },
              { label: 'For Each', slug: 'fundamentos/for-each' },
            ],
          },
          {
            label: 'Construir interfaces',
            items: [
            { label: 'Componentes', slug: 'componentes' },
            { label: 'Routing', slug: 'routing' },
            { label: 'Demo interactiva', slug: 'pelela-counter' },
          ],
        },
          {
            label: 'Practicar y consultar',
            items: [
              { label: 'Ejercicios', slug: 'ejercicios' },
              { label: 'Bindings y eventos', slug: 'referencia/bindings-eventos' },
              { label: 'Reactividad e initialize', slug: 'referencia/reactividad-lifecycle' },
              { label: 'API pública', slug: 'referencia/api-publica' },
              { label: 'Errores comunes', slug: 'referencia/errores-comunes' },
              { label: 'Testing', slug: 'referencia/testing' },
              { label: 'Puente hacia React', slug: 'puente-a-react' },
            ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [pelelajsPlugin()],
  },
})
