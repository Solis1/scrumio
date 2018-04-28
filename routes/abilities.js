const abilitiesController = require('../controllers/abilitiesController');

module.exports = function(app, passport) {

  app.post('/abilities', isLoggedIn, abilitiesController.create);

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
