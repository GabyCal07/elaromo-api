const { response } = require('express');
const Proveedor = require('../models/proveedores');

// Mostrar todos los proveedores de todas las categorias
const getProveedores = async (req, res = response) => {
    Proveedor.find()
    .then((result) => {
        res.send(result);        
    })
    .catch(err => {
        res.status(404).send(err);        
    });
}


// Mostrar todos los proveedores de una categoria
const getProveedoresByCategory = async (req, res = response) => {
     Proveedor.find({category: req.params.categoria})
     .then((result) => {
         res.send(result);
     })
     .catch(err => {
         res.status(404).send(err);
     });
};

// Crear proveedor
const crearProveedor = async (req, res = response) => {
    
    const { name } = req.body;
        
    try {
        let proveedor = await Proveedor.findOne({ name });

        if ( proveedor ) {
            return res.status(400).json({
                ok: false,
                msg: 'Este proveedor ya existe'
            });
        }

        proveedor = new Proveedor( req.body );
        
        proveedor.save()
        .then(() => {
            res
            .status(201)  
            .send(proveedor);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

// Actualizar info del proveedor
const updateProveedor = async (req, res = response) => {

    const _id = req.params.id;
    Proveedor.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

// Borrar proveedor
const deleteProveedor = async (req, res = response) => {

    const _id = req.params.id;
    Proveedor.deleteOne({ _id: _id })
    .then((result) => {
        if (!result) {
            return res.status(404).send("Proveedor no encontrado");
        }        
        res.status(200).send("El proveedor ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    getProveedores,
    getProveedoresByCategory,
    crearProveedor,
    updateProveedor,
    deleteProveedor
}