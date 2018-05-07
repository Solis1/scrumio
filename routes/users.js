const usersController = require('../controllers/usersController');
module.exports = function(app, passport) {

  app.get('/profile', isLoggedIn, usersController.index);

  app.put('/users/:id', isLoggedIn, usersController.update)

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
