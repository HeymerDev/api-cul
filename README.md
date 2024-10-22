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

<div style="border-left: 4px solid #FFA500; padding: 10px; background-color: #FFF3CD;">
  <strong>⚠️ Advertencia:</strong> Todas estas rutas estan protegidas, solo se puede acceder a ellas me diante el toke se le da al loguearse, este debera ponerse como bearer token en la auth de postman, si no obtendra un mensaje de inantorizacion.
</div>

### Users

- GET api/v1/users: Lista todos los usuarios.


- GET api/v1/users/:id: Lista un usuario.


- POST api/v1/users: crea un usuario.


- PATCH api/v1/users/:id: Actualiza cual quier campo de un usuario.


- DELETE api/v1/users/:id: Elimina un usuario.


-------
### Client

- GET api/v1/client: Lista todos los CLIENTES.

- GET api/v1/client: Lista UN CLIENTE.

- POST api/v1/client: Crea un cliente.

- PATCH api/v1/client: Actualiza un cliente.

- DELETE api/v1/client: Elimina un cliente.


# Auth

## **POST** `/auth/login`
### Descripción:
Inicia sesión con credenciales de usuario.

### Parámetros:
- **email** (string): Correo electrónico del usuario.  
- **password** (string): Contraseña del usuario.  

### Respuesta:
- Token JWT de acceso si las credenciales son válidas.

---

## **POST** `/auth/register`
### Descripción:
Registra un nuevo usuario.

### Parámetros:
- **name** (string): Nombre del usuario.  
- **email** (string): Correo electrónico del usuario.  
- **password** (string): Contraseña del usuario.  

### Respuesta:
- Mensaje de éxito si el registro es exitoso.








