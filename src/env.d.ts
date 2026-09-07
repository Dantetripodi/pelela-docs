/// <reference types="astro/client" />

declare module '*.pelela' {
  export const viewModelName: string
  const template: string
  export default template
}

declare module 'virtual:pelela-auto-register' {
  const mod: Record<string, never>
  export default mod
}
