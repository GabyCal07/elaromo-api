const express = require('express');
const { dbConnection } = require('./database/config');

const cors = require('cors');
const compression = require('compression');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use(express.json());
app.use(compression()); 
app.use(cors()); 

// Rutas
app.use(require('./routes/grupos') );
app.use(require('./routes/categorias') );
app.use(require('./routes/proveedores') );
app.use(require('./routes/contactos') );

app.get('/', (req, res) => {
    res.send("API El Aromo");    
 });  

app.listen(PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});









