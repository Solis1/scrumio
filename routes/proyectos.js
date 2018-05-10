const proyectoControllers = require('../controllers/proyectoController');
const express = require('express');
const router = express.Router();


router.post('/', proyectoControllers.create);

router.get('/:page?', proyectoControllers.index);

router.get('/ver/:id', proyectoControllers.show);

/*

router.put('/:id', proyectoControllers.);

router.delete('/:id?', proyectoControllers.remove);
*/
module.exports = router;
