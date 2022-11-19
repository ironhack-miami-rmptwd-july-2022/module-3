const express = require('express');
const app = express();
// anytime we have a line that says const something = require('something')
// if the something that is inside the parentheses is not a relative path to a file we created
// then that means it is referencing a third party package. 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const PORT = 4200;
const path = require('path');
const cookieParser = require("cookie-parser");
var flash = require('connect-flash');
require('dotenv').config();
const cors = require('cors');

// =========== connection to DB =============

mongoose
  .connect('mongodb://localhost/expressApp')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// ==========================================


// middleware always comes between declarations and routes
// ========== MIDDLEWARE =============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// bodyparser is the package that gives you access to req.body when you send a form on a post route 
// these 2 lines just activate the bodyparser middleware 
// middleware is a fancy work for function or group of functions that run after one thing, and before another
// in this case all of our middlewares run after the user makes a request to the server 
// and before we return an html resource in response to that request


app.use(express.static('public'));
// ^ this is the line that tells our app to look inside the public folder for all static assets like images or css files 



app.use(
  session({
    secret: '123secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000
    }, // ADDED code below !!!
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost/expressApp'
    })
  })
);

app.use(cookieParser());
app.use(flash());



app.use(express.static(path.join(__dirname, "..", "public")));

// ============== ROUTES =====================



  let whitelist = ['http://localhost:4200','http://localhost:3000'];
  let corsOptions = {
      origin: (origin, callback)=>{
          if (whitelist.indexOf(origin) !== -1) {
              callback(null, true)
          } else {
              callback(new Error('Not allowed by CORS'))
          }
      },credentials: true
  }



  app.use(cors(corsOptions));


// app.use('*', cors(
//   {origin: "http://localhost:3000", 
//   "Access-Control-Allow-Credentials": true}
// ));
// this is what determines the prefix to your routes within the file that you are requiring. If you add "/blah" then all the routes in your index file would have to start with /blah before any route defined. ie: you create a route in index.js that has an endpoint of '/home' but you prefixed '/blah' in the app.js to require index.js, your end result of the route would then be www.domainName.com/blah/home
//       |
app.use('/animals', require('./routes/animals'));
app.use('/locations', require('./routes/locations'));
app.use('/', require('./routes/authroutes'));

// this is how we link our routes files to our app


// ===========================================

  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).render("not-found-page");
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({theError: err});
    }
  });



// remember to listen at bottom of the app js
app.listen(PORT ||4200, () => console.log(`Listening on port ${PORT}`));


