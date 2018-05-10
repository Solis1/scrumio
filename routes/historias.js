const historiasController = require('../controllers/historiasController');
const express = require('express');
const router = express.Router();

/*module.exports = function(app, passport) {

  app.post('/abilities', isLoggedIn, abilitiesController.create);

  app.delete('/abilities/:id', isLoggedIn, abilitiesController.remove);

  app.put('/abilities/:id', isLoggedIn, abilitiesController.update);

}*/

router.post('/', historiasController.create);

router.get('/:page?', historiasController.index);

router.get('/show/:id', historiasController.show);

router.put('/:id', historiasController.update);

router.delete('/:id?', historiasController.remove);

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.render('index', {
    title: "Home",
    message: "Necesita logearse primero."
  });
}

module.exports = router;
