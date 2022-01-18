
const { Schema, model } = require('mongoose');

const ProveedorSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true        
    },
    info: {
        type: String,
        required: true
    },
    category: { 
        type: String,
        required: true
    },
    review: {
        type: Array
     },
    user: {
        type: Array
    },    
    img: { 
        type: String,
        required: true
    }    
});

module.exports = model('Proveedor', ProveedorSchema );
