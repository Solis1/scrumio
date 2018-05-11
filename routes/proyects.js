const proyectsControllers = require('../controllers/proyectsController');
const securityMiddleware = require('../middlewares/securityMiddleware');

module.exports = function(app, passport) {

  app.post('/proyects', securityMiddleware.isLoggedIn, proyectsControllers.create);

}

// router.get('/ver/:id', proyectsControllers.show);

/*

router.put('/:id', proyectoControllers.);

router.delete('/:id?', proyectoControllers.remove);
*/
