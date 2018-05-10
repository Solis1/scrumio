const proyectsControllers = require('../controllers/proyectsController');
const express = require('express');
const router = express.Router();


router.post('/', proyectsControllers.create);

// router.get('/ver/:id', proyectsControllers.show);

/*

router.put('/:id', proyectoControllers.);

router.delete('/:id?', proyectoControllers.remove);
*/
module.exports = router;
