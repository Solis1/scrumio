const proyectoControllers = require('../controllers/proyectoController');
const express = require('express');
const router = express.Router();


router.post('/', proyecsControllers.create);

router.get('/:page?', proyectsControllers.index);

router.get('/ver/:id', proyectsControllers.show);

/*

router.put('/:id', proyectoControllers.);

router.delete('/:id?', proyectoControllers.remove);
*/
module.exports = router;
