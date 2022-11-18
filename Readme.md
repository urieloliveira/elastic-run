# Observabilidade no front e no back

## Tecnologias utilizadas

- React
- Node
- Express
- Sqlite
- Elasticsearch
- Kibana
- APM
- Beats
- Nginx
- Docker

## Folder Structure

```bash
├── README.md
├── .gitignore
├── apps
│   ├── api
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src
│   │   │   ├── app.ts
│   │   web
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src
│   │   │   ├── index.tsx
│   libs
│   ├── elastic
│   │   ├── docker-compose.yml
│   │   ├── apm
│   │   │   ├── apm-server.yml
│   │   ├── beats
│   │   │   ├── heartbeat.yml
│   │   │   ├── metricbeat.yml
│   ├── nginx
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile
│   │   ├── default.conf
│   │   ├── entrypoint.sh
│   │   ├── filebeat.yml
```

## Como rodar

### Pré-requisitos

- Docker

### Passo a passo

1. Clone o repositório
2. Rode o comando `docker-compose up` na raiz do projeto
3. 