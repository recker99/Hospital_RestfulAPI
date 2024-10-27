# Aplicación de Gestión de Pacientes - Hospital

## Descripción

Esta aplicación es un backend RESTful desarrollada en Node.js utilizando Express y MongoDB para la gestión de pacientes en un hospital. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos de los pacientes.


## Tecnologías Utilizadas

- Node.js v20.12.0
- Express v4.21.1
- MongoDB v7.3.3
- Mongoose v8.7.3
- Nodemon v3.1.7
- Postman v11.18.0 (para pruebas)
- Visual Studio Code v1.94.2

## Requerimientos Cumplidos

### 1. Crear un Paciente
- Se implementó un endpoint `POST /api/paciente` para crear un nuevo paciente.
- Los datos del paciente se envían en el cuerpo de la solicitud como un objeto JSON.

### 2. Obtener Todos los Pacientes
- Se implementó un endpoint `GET /api/paciente` que devuelve una lista de todos los pacientes en la base de datos.

### 3. Obtener un Paciente por ID
- Se implementó un endpoint `GET /api/paciente/:id` que permite obtener la información de un paciente específico usando su ID.

### 4. Actualizar un Paciente
- Se implementó un endpoint `PUT /api/paciente/:id` para actualizar los datos de un paciente existente.
- Se realiza una validación para asegurarse de que el paciente existe antes de intentar actualizarlo.

### 5. Eliminar un Paciente
- Se implementó un endpoint `DELETE /api/paciente/:id` que permite eliminar un paciente de la base de datos.

### 6. Búsqueda de Pacientes por RUT
- Se implementó un endpoint `GET /api/paciente/rut/:rut` que permite buscar un paciente utilizando su RUT.
- La búsqueda es sensible a los espacios en blanco, asegurando que los datos sean procesados correctamente.

## Capturas de pantalla
### Crear registro en Postman(POST) 
![crear registro](/public/img/create-postman.jpg)

### Obtener registros en MongoDB
![obtener registro](/public/img/registros-mongodb.jpg)

### Obtener registros en LocalHost
![obtener registro](/public/img/registros-api-localhost.jpg)

### Obtener registro en Postman(GET)
![obtener registro](/public/img/obtener-paciente-postman.jpg)

### Actualizar registro en Postman(PUT)
![actualizar registro](/public/img/actualizar-paciente-postman.jpg)

### Eliminar registro en Postman(DELETE)
![eliminar registro](/public/img/eliminar-postman.jpg)

###  Buscar registro por RUt en Postman(GET)
![buscar registro por rut](/public/img/buscarXrut-paciente-postman.jpg)


