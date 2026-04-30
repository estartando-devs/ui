# @estartando/ui — Monorepo

[![license](https://img.shields.io/npm/l/@estartando/ui.svg)](./LICENSE)

Repositório da biblioteca de UI e componentes do **Estartando Devs**, gerenciado com Bun Workspaces.

## Pacotes

| Pacote | Descrição | Diretório |
|---|---|---|
| [`@estartando/ui`](./packages/ui) | Biblioteca de componentes de UI | `packages/ui` |
| `@estartando/example` | App de demonstração dos componentes | `packages/example` |

## Setup

```bash
# Instalar Bun (se necessário)
curl -fsSL https://bun.sh/install | bash

# Instalar dependências
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
├── package.json
├── bun.lock
├── LICENSE
└── packages/
    ├── ui/               ← @estartando/ui (publicado no npm)
    └── example/          ← App de demonstração
```

## Licença

[MIT](./LICENSE) © EstartandoDevs
