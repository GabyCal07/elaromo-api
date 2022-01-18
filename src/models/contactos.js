
const { Schema, model } = require('mongoose');

const ContactoSchema = Schema({
    name : {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true
    },
    mensaje: { 
        type: String,
        required: true
    }
});

module.exports = model('Contacto', ContactoSchema );
