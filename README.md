# El Aromo-API
REST API es un servicio para uso en la web de los vecinos del barrio privado "El Aromo".

Este servicio cuenta con endopoints que permiten administrar los datos de la base **elaromo**, es decir, crear, borrar, actualizar y listar (CRUD) los grupos, categorías y proveedores que necesita el website ElAromo-Vecinos. También permite administrar las consultas que se realicen a través del formulario de contacto del website ElAromo-vecinos. 

## Levantar API
Para levantar el proyecto en forma local:

 1. Descargar el repo
 2. Instalar módulos (node_modules) en la  **/api**

    *npm i* 

 3. Crear un archivo .env con la siguiente información:
      
      PORT=8080  (sin no se especifica el puerto, tomará el puerto 3001 por defecto)
      MONGO_URI=mongodb://127.0.0.1:27017/elaromo

 4. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 5. Crear una base llamada **elaromo** en MongoDB.
  
 6. Levantar el servicio con el comando `npm run start` (o `node index.js` dentro de **api/src**). Opcionalmente se puede usar `npm run dev` (o `nodemon index.js` dentro de **api/src**) si se va a trabajar sobre la API. Este servicio corre en el puerto indicado en el .env y si no se especifica el puerto tomará el 3001 por defecto.

 7. A través de Postman por ejemplo, agregar grupos, categorías, proveedores y/o contactos en la base **elaromo** de acuerdo a los schemas correspondientes dentro de **src/models**.
