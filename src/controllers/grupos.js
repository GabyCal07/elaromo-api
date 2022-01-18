const { response } = require('express');
const Grupo = require('../models/grupos');

// Obtener todos los grupos
const getGrupos = async (req, res = response) => {
    Grupo.find()
    .then((result) => {
        res.send(result);        
    })
    .catch(err => {
        res.status(404).send(err);
    });
}

// Crear un grupo
const crearGrupo = async (req, res = response) => {

    const { group } = req.body;
    
    try {
        let grupo = await Grupo.findOne({ group });

        if ( grupo ) {
            return res.status(400).json({
                ok: false,
                msg: 'Este grupo ya existe'
            });
        }

        grupo = new Grupo( req.body );
        
        grupo.save()
        .then(() => {
            res
            .status(201)  
            .send(grupo);
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

// Actualizar info de un grupo
const updateGrupo = async (req, res = response) => {
    const _id = req.params.id;
    Grupo.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

// Borrar un grupo
const deleteGrupo = async (req, res = response) => {
    const _id = req.params.id;
    Grupo.deleteOne({ _id: _id })
    .then((result) => {
        if (!result) {
            return res.status(404).send("Grupo no encontrado");
        }       
        res.status(200).send("El grupo ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    getGrupos,
    crearGrupo,
    updateGrupo,
    deleteGrupo    
}