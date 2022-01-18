
const { Schema, model } = require('mongoose');

const GrupoSchema = Schema({
    name : {
        type: String,
        required: true        
    },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    group: { 
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Grupo', GrupoSchema );
