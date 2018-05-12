const proyectsControllers = require('../controllers/proyectsController');
const securityMiddleware = require('../middlewares/securityMiddleware');

module.exports = function(app, passport) {

  app.get('/proyects', securityMiddleware.isLoggedIn, proyectsControllers.index);
  app.post('/proyects', securityMiddleware.isLoggedIn, proyectsControllers.create);
  app.put('/proyects/:id', securityMiddleware.isLoggedIn, proyectsControllers.update);
  app.delete('/proyects/:id' securityMiddleware.isLoggedIn, proyectsControllers.remove);

}

// router.get('/ver/:id', proyectsControllers.show);

/*

router.put('/:id', proyectoControllers.);

router.delete('/:id?', proyectoControllers.remove);
*/
