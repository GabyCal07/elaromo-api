const { Router } = require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validar-datos');

const { getContactos } = require('../controllers/contactos');
const { crearContacto } = require('../controllers/contactos');
const { updateContacto } = require('../controllers/contactos');
const { deleteContacto } = require('../controllers/contactos');

const router = Router();

router.get('/contactos', getContactos);

router.post('/contacto', [
    check('name','El nombre es obligatorio').not().isEmpty(),    
    check('email', 'El email no es válido').isEmail(),
    check('mensaje','El mensaje es obligatorio').not().isEmpty(),    
    validarDatos
], crearContacto);

router.patch('/contacto/:id',[
    check('name','El nombre es obligatorio').not().isEmpty(),    
    check('email', 'El email no es válido').isEmail(),
    check('mensaje','El mensaje es obligatorio').not().isEmpty(),    
    validarDatos
], updateContacto);

router.delete('/contacto/:id', deleteContacto);

module.exports = router;
