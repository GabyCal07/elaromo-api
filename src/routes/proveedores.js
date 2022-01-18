/*
    Proveedores Routes    
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validar-datos');

const { getProveedores } = require('../controllers/proveedores');
const { getProveedoresByCategory } = require('../controllers/proveedores');
const { crearProveedor } = require('../controllers/proveedores');
const { updateProveedor } = require('../controllers/proveedores');
const { deleteProveedor } = require('../controllers/proveedores');

const router = Router();

router.get('/proveedores', getProveedores);
router.get('/proveedores/:categoria', getProveedoresByCategory);

router.post('/proveedor', [
    check('name','El nombre es obligatorio').not().isEmpty(),    
    check('info', 'La información es obligatoria').not().isEmpty(),
    check('category','La categoría es obligatoria').not().isEmpty(),    
    check('img','La imagen es obligatoria').not().isEmpty(),    
    validarDatos
], crearProveedor);

router.patch('/proveedor/:id', updateProveedor);
router.delete('/proveedor/:id', deleteProveedor);

module.exports = router;