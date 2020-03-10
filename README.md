# DESARROLLO BACKEND PRUEBA

**INSTRUCCIONES** Imaginemos que un cliente solicita el envío de un pedido mediante una llamada a una API REST para
almacenarlo en la base de datos. El pedido debe contener: Nombre y apellidos del cliente, Email (Único por
cliente), Teléfono, Dirección de entrega (sólo puede existir una por pedido y muchas por usuario, Fecha de
entrega y Franja de hora seleccionada para la entrega (variable, pueden ser desde franjas de 1h hasta de 8h)
Una vez tenemos guardada la información del pedido, debe asignarse a un driver que tengamos dado de alta en
el sistema de forma aleatoria. Por otro lado, nuestros drivers mediante su aplicación, necesitan obtener el listado
de tareas para completar en el día. Es necesario contar con un endpoint que reciba como parámetro el ID del
driver y la fecha de los pedidos que queremos obtener y nos devuelve un JSON con el listado.

**Server Running** localhost:3001

# ROUTING enpoint GET and POST
hay una carpeta postman con collections de rutas para poder implementar lo solicitado

Recordar que esta ruta para retornar el listado diario de tareas utiliza un `params` con el nombre `date` y recibe un formato 'mm-dd-yyyy'
si no se establece genera la fecha actual por defecto
-http://localhost:3001/order/listday/:id

# Docker
ejecutar archivo `docker-compose.yaml` con el comando `docker-compose up -d` para crear entorno de trabajo

# Npm
**Librerias utilizadas**
*babel-polyfill
*babel-node
*express
*pg
*sequelize
*pg-hstore
*body-parser
