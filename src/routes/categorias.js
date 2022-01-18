/*
    Categorias Routes    
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validar-datos');

const { getCategorias } = require('../controllers/categorias');
const { getCategoriasByGroup } = require('../controllers/categorias');
const { crearCategoria } = require('../controllers/categorias');
const { updateCategoria } = require('../controllers/categorias');
const { deleteCategoria } = require('../controllers/categorias');

const router = Router();

router.get('/categorias', getCategorias);
router.get('/categorias/:grupo', getCategoriasByGroup);    

router.post('/categoria', [
    check('name','El nombre es obligatorio').not().isEmpty(),    
    check('img','La imagen es obligatoria').not().isEmpty(),    
    check('group','El nombre del grupo es obligatorio').not().isEmpty(),    
    validarDatos
], crearCategoria);

router.patch('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

module.exports = router;

