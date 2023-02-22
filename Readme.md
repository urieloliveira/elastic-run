# Easy Invest

Projeto de estudo para aprimoramento de conhecimentos em desenvolvimento de software.

## Objetivo

O objetivo do projeto é criar uma aplicação de investimentos, onde o usuário poderá criar uma carteira de investimentos e acompanhar o seu desempenho. A aplicação será dividida em 3 módulos:

- Módulo de autenticação
- Módulo de carteira de investimentos
- Módulo de investimentos

## Módulo de autenticação

O módulo de autenticação será responsável por gerenciar os usuários da aplicação. O usuário poderá se cadastrar e logar na aplicação.

## Módulo de carteira de investimentos

O módulo de carteira de investimentos será responsável por gerenciar as carteiras de investimentos dos usuários. O usuário poderá criar uma carteira de investimentos e acompanhar o seu desempenho.

## Módulo de investimentos

O módulo de investimentos será responsável por gerenciar os investimentos disponíveis para o usuário. O usuário poderá investir em um ativo e acompanhar o seu desempenho.

## Tecnologias utilizadas

- React
- Node
- Nginx
- Prometheus
- Grafana
- Cadvisor
- Sonarqube
- Elastic Stack
  - Elasticsearch
  - Kibana
  - APM
  - Beats

## Folder Structure

```bash
├── README.md
├── .gitignore
├── docker-compose.yml
├── eslintrc.json
├── .prettierrc
├── commitlint.config.ts
├── jest.config.js
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── .github
│   ├── workflows
├── packages
│   ├── [modules]
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── jest.config.js
│   │   ├── src
│   │   │   ├── index.ts
│   libs
│   ├── [modules]
```

## Como rodar

### Pré-requisitos

- Docker

### Passo a passo

1. Clone o repositório
2. Rode o comando `docker-compose up` na raiz do projeto
