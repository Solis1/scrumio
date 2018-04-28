module.exports = function(app, passport) {

  app.get('/profile', isLoggedIn, function(req, res) {
      res.render('profile', {
        title: "Profile",
        userName: req.user.local
      });
  });

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
