const membersController = require('../controllers/membersController');

module.exports = function(app, passport) {

  app.post('/members', isLoggedIn, membersController.create);

  app.delete('/members/:id', isLoggedIn, membersController.remove);

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
