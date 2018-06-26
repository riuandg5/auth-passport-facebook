var port  = process.env.PORT || 3079;
// require npm packages
var express    = require("express"),
    passport   = require("passport"),
    bodyParser = require("body-parser"),
    fbStrategy = require("passport-facebook").Strategy,
    app        = express();
// require routes
var indexRoute    = require("./app/routes/index.route");
// set views directory path
app.set("views", "./app/views");
// set templating engine to ejs
app.set("view engine", "ejs");
// host static files (public directory) with express
app.use(express.static("public"));
// passport configuration
app.use(require("express-session")({
    secret: "thisissecretstring",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
if(process.env.NODE_ENV !== 'production'){
    // if app is running on localhost
    var key       = require("./config/config.json"),
        appId     = key.appid,
        appSecret = key.appsecret,
        backUrl   = '/signin/facebook/return';
} else {
    // if app is running on hosting service
    var appId     = process.env.APPID,
        appSecret = process.env.APPSECRET,
        backUrl   = process.env.BACKURL+'/signin/facebook/return';
}
passport.use(new fbStrategy(
    {
        clientID: appId,
        clientSecret: appSecret,
        callbackURL: backUrl,
        enableProof: true,
        profileFields: ['id', 'email', 'displayName', 'picture.type(large)']
    }, function(accessToken, refreshToken, profile, cb){
        return cb(null, profile);
    }
));
passport.serializeUser(function(user, cb){
    cb(null, user);
});
passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});
// middleware to tell that currentUser is req.user
app.use(function(req, res, next){
    if(req.user){
        res.locals.currentUser = req.user._json;
    } else {
        res.locals.currentUser = req.user;
    }
    next();
});
// use body-parser
app.use(bodyParser.urlencoded({extended: true}));
// use routes
app.use(indexRoute);
// listen to the port
app.listen(port, function(){
    console.log("Server started...");
});