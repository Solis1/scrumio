const historiasController = require('../controllers/historiasController');

module.exports = function(app, passport) {
  app.post('/', historiasController.create);

  app.get('/:page?', historiasController.index);

  app.get('/show/:id', historiasController.show);

  app.put('/:id', historiasController.update);

  app.delete('/:id?', historiasController.remove);
}

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
