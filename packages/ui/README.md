# @estartando/ui

[![npm version](https://img.shields.io/npm/v/@estartando/ui.svg)](https://www.npmjs.com/package/@estartando/ui)
[![license](https://img.shields.io/npm/l/@estartando/ui.svg)](./LICENSE)

Biblioteca de componentes de UI em Tailwind CSS do **Estartando Devs**.

## Instalação

```bash
npm install @estartando/ui
```

## Requisitos

- Tailwind CSS v4

## Uso

Adicione o plugin ao seu CSS:

```css
/* app.css */
@import "tailwindcss";
@plugin "@estartando/ui";
```

## Componentes

A biblioteca fornece classes utilitárias para estilizar componentes. Alguns exemplos:

### Botão

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline btn-accent">Outline Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-cta btn-primary">Inscrever agora</button>
```

### Input

```html
<input class="input input-card" placeholder="Seu nome" />
<textarea class="textarea textarea-card" placeholder="Bio"></textarea>
<input class="input input-error" placeholder="Campo inválido" />
```

### Card

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Título</h3>
    <p class="card-description">Descrição</p>
  </div>
  <div class="card-content">Conteúdo</div>
  <div class="card-footer">Footer</div>
</div>
```

## Temas

Alterne entre tema claro e escuro usando o atributo `data-theme`:

```html
<html data-theme="dark">
```

## Licença

[MIT](./LICENSE) © EstartandoDevs
