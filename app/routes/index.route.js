// express router configuration
var express = require("express"),
    router  = express.Router();
// require passport for authentication
var passport = require("passport");
// require request
var request  = require("request");
// require middleware
var middleware = require("../middleware");
// root route to homepage
router.get("/", function(req, res){
    res.render("home");
});
// route to secret page which is accessible only when signed in
router.get("/secret", middleware.isLoggedIn, function(req, res){
    res.render("secret");
});
// route to signin form
router.get("/signin", function(req, res){
   res.render("signin"); 
});
// route to get signed which is handled by facebook
router.get('/signin/facebook',
    passport.authenticate(
        'facebook',
        {
            authType: 'rerequest',
            // scope: [
            //     'email',
            //     'user_birthday'
            // ]
        }
    )
);
// route to return
router.get('/signin/facebook/return',
    passport.authenticate(
        'facebook',
        {
            successRedirect: '/',
            failureRedirect: '/signin'
        },
    ), function(req, res){
});
// route to signout
router.get("/signout", function(req, res){
    req.logout();
    res.redirect("/");
});
// export express router to use in main app
module.exports = router;