const { response } = require('express');
const Contacto = require('../models/contactos');

// Obtener datos del Formulario de contacto
const getContactos = async (req, res = response) => {
    Contacto.find()
    .then((result) => {
        res.send(result);        
    })
    .catch(err => {
        res.status(404).send(err);
    });
}

// Agregar datos del Formulario de contacto
const crearContacto = async (req, res = response) => {
        
    const contacto = new Contacto(req.body);  
    
    contacto.save()
    .then(() => {
        res
        .status(201)  
        .send(contacto);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

// Actualizar datos del Formulario de contacto
const updateContacto = async (req, res = response) => {
    const _id = req.params.id;
    Contacto.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    .then((result) => {
        if(!result) {
            return res.status(404).send(err);
        }
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
};

// Borrar los datos de un Formulario de contacto
const deleteContacto = async (req, res = response) => {
    const _id = req.params.id;
    Contacto.deleteOne({ _id: _id })
    .then((result) => {
        if (!result) {
            return res.status(404).send("Contacto no encontrado");
        }       
        res.status(200).send("El contacto ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    getContactos,
    crearContacto,
    updateContacto,
    deleteContacto    
}