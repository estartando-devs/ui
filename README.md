# @estartando — Monorepo

[![license](https://img.shields.io/npm/l/@estartando/ui.svg)](./LICENSE)

Monorepo do design system e ferramentas do **Estartando Devs**, gerenciado com [Bun Workspaces](https://bun.sh/docs/install/workspaces).

## Pacotes

| Pacote | Descrição | Diretório |
|---|---|---|
| [`@estartando/ui`](./packages/ui) | Plugin Tailwind CSS modular com componentes e design tokens | `packages/ui` |
| `@estartando/example` | App de demonstração dos componentes (privado) | `packages/example` |

## Setup

```bash
# Instalar Bun (se necessário)
curl -fsSL https://bun.sh/install | bash

# Instalar dependências de todos os workspaces
bun install
```

## Scripts

```bash
# Iniciar o app de exemplo
bun run dev:example

# Executar lint em todos os pacotes
bun run lint
```

## Estrutura

```
├── package.json          ← Root monorepo
├── bun.lock
├── LICENSE
└── packages/
    ├── ui/               ← @estartando/ui (publicado no npm)
    │   ├── index.js
    │   ├── components/
    │   └── themes/
    └── example/          ← App de demonstração (privado)
        ├── index.html
        └── vite.config.js
```

## Licença

[MIT](./LICENSE) © EstartandoDevs
