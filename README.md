# API REST con NestJS, TypeORM y PostgreSQL

Este proyecto es una API REST desarrollada con NestJS que permite listar **usuarios** y **clientes**. Utiliza **TypeORM** para la administración de la base de datos en **PostgreSQL**. En el servicio de clientes, se devuelven dos usuarios de prueba.
Esta aplicacion se ejecuta por defecto en <a href="http://localhost:3000">localhost:3000</a>

## Características

- Listado de usuarios y clientes.
- Uso de **TypeORM** para la gestión de la base de datos.
- Base de datos en **PostgreSQL**.
- Incluye un servicio de prueba que devuelve dos usuarios quemados.

## Requisitos previos

Antes de iniciar el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js (>=14)
- PostgreSQL
- Nest CLI (opcional pero recomendado)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

  1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd nombre-del-proyecto
   npm install
   ```

  2. Inicia el servidor de desarrollo:
  ```bash
   npm run start:dev
   ```


## Endpoints

Usuarios:
- GET /users: Lista todos los usuarios.

Client:
- GET /client: Lista todos los usuarios.


