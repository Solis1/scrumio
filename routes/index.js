const indexController = require('../controllers/indexController');
module.exports = function(app, passport) {

    app.get('/', isLog, indexController.index);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/dashboard:tab?', isLoggedIn, indexController.dashboard);

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/logout', indexController.logout);

};

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

var isLog = (req, res, next) => {

  if(req.isAuthenticated()){
    res.redirect('dashboard');
  }else {
    return next();
  }

}
