const { response } = require('express');
const Categoria = require('../models/categorias');

// Obtener todos las categorias
const getCategorias = async (req, res = response) => {
    Categoria.find()
    .then((result) => {
        res.send(result);        
    })
    .catch(err => {
        res.status(404).send(err);        
    });
}

//Obtener todas las categorias de un grupo específico
const getCategoriasByGroup = async (req, res = response) => {

    Categoria.find({group: req.params.grupo})
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
}; 

// Crear categoria
const crearCategoria = async (req, res = response) => {
    const { name } = req.body;
    
    try {
        let categoria = await Categoria.findOne({ name });

        if ( categoria ) {
            return res.status(400).json({
                ok: false,
                msg: 'Esta categoría ya existe'
            });
        }

        categoria = new Categoria( req.body );
        
        categoria.save()
        .then(() => {
            res
            .status(201)  
            .send(categoria);
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
}

// Actualizar una categoria
const updateCategoria = async (req, res = response) => {

    const _id = req.params.id;
    Categoria.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

// Borrar una categoria
const deleteCategoria = async (req, res = response) => {

    const _id = req.params.id;
    Categoria.deleteOne({ _id: _id })
    .then((result) => {        
        if (!result) {
            return res.status(404).send("Categoría no encontrada");
        }
        res.status(200).send("La categoría ha sido eliminada");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    getCategorias, 
    getCategoriasByGroup,
    crearCategoria, 
    updateCategoria, 
    deleteCategoria 
}