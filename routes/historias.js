const historiasController = require('../controllers/historiasController');

module.exports = function(app, passport) {
  app.post('/histories', historiasController.create);

  app.get('/histories/:page?', historiasController.index);

  app.get('/histories/show/:id', historiasController.show);

  app.put('/histories/:id', historiasController.update);

  app.delete('/histories/:id?', historiasController.remove);
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
