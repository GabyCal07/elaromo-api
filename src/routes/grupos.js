/*
    Grupos Routes    
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validar-datos');

const { getGrupos } = require('../controllers/grupos');
const { crearGrupo } = require('../controllers/grupos');
const { updateGrupo } = require('../controllers/grupos');
const { deleteGrupo } = require('../controllers/grupos');

const router = Router();

router.get('/grupos', getGrupos);

router.post('/grupo', [
    check('name','El nombre es obligatorio').not().isEmpty(),    
    check('description', 'La descripción es obligatoria').not().isEmpty(),
    check('img','La imagen es obligatoria').not().isEmpty(),    
    check('group','El grupo es obligatorio').not().isEmpty(),    
    validarDatos
], crearGrupo);

router.patch('/grupo/:id', updateGrupo);
router.delete('/grupo/:id', deleteGrupo);

module.exports = router;




