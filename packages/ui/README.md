# @estartando/ui

[![npm version](https://img.shields.io/npm/v/@estartando/ui.svg)](https://www.npmjs.com/package/@estartando/ui)
[![license](https://img.shields.io/npm/l/@estartando/ui.svg)](./LICENSE)

Plugin Tailwind CSS modular inspirado no daisyUI, alinhado ao design system do **Estartando Devs**.

## Instalação

```bash
npm install @estartando/ui
```

## Requisitos

- Tailwind CSS v4 ou superior. Este plugin não é compatível com versões anteriores.

## Uso

```css
/* app.css */
@plugin "@estartando/ui";
```

### Opções

```js
estartandoUI({
  defaultTheme: "dark",       // "dark" | "light"
  radius: "0.75rem",          // --radius global
  colors: {                   // sobrescreve qualquer token
    "--color-primary": "#6c63ff",
    "--color-accent": "#81caa8",
  },
})
```

## Componentes

### Botão

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline btn-accent">Outline Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-cta btn-primary">Inscrever agora</button>
```

Variantes: `btn-primary` `btn-secondary` `btn-accent` `btn-destructive` `btn-success` `btn-warning` `btn-info`  
Modificadores: `btn-outline` `btn-ghost` `btn-link` `btn-cta` `btn-block`  
Tamanhos: `btn-xs` `btn-sm` `btn-md` `btn-lg`

### Input

```html
<input class="input input-card" placeholder="Seu nome" />
<textarea class="textarea textarea-card" placeholder="Bio"></textarea>
<input class="input input-error" placeholder="Campo inválido" />
```

Variantes: `input-primary` `input-accent` `input-success` `input-error` `input-ghost` `input-card`

### Card

```html
<div class="card card-elevated">
  <div class="card-header">
    <h3 class="card-title">Título</h3>
    <p class="card-description">Descrição</p>
  </div>
  <div class="card-content">Conteúdo</div>
  <div class="card-footer">Footer</div>
</div>
```

Variantes: `card-hover` `card-elevated` `card-bordered` `card-glass` `card-compact` `card-side`

## Temas

Alterne entre `dark` e `light` via atributo `data-theme`:

```html
<html data-theme="dark">
```

## Subpath Imports

Importe partes individuais do plugin:

```js
const { lightTheme, darkTheme } = require("@estartando/ui/themes");
const buttonComponent = require("@estartando/ui/components/button");
```

## Estrutura

```
@estartando/ui
├── index.js              ← plugin principal
├── package.json
├── LICENSE
├── CHANGELOG.md
├── components/
│   ├── index.js          ← barrel export
│   ├── button.js
│   ├── input.js
│   └── card.js
└── themes/
    ├── index.js          ← engine de temas
    ├── light.js
    └── dark.js
```

## Publicação no npm

A publicação é gerenciada na raiz do monorepo usando **Bun**.

```bash
# 1. Login no npm (requer org @estartando)
bun npm login

# 2. Atualizar versão e publicar automaticamente
# Isso irá atualizar o package.json, criar a tag e publicar o pacote
bun run release:patch  # ou release:minor / release:major
```

## Escalabilidade

Para adicionar novos componentes:

1. Crie `components/badge.js` exportando uma função que retorna CSS-in-JS
2. Importe e spread em `components/index.js`
3. Pronto — o plugin injeta automaticamente

Para novos temas:

1. Crie `themes/ocean.js` com os tokens
2. Registre em `themes/index.js` sob `[data-theme='ocean']`

## Changelog

Veja [CHANGELOG.md](./CHANGELOG.md) para histórico de versões.

## Licença

[MIT](./LICENSE) © EstartandoDevs
