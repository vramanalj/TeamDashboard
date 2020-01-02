
var express = require('express');
var compression = require('compression');
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
console.log("CF ENV: "+JSON.stringify(appEnv));
// create a new express server
var app = express();

var port=appEnv.port;

require("dotenv").config();


app.use(compression());
var allowCrossDomain = function(req, res, next) {
  // console.log('::: allow CORS server.js ::: Original Request URL: ' + req.originalUrl);
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
app.enable('trust proxy');

//Redirect http to https
app.use (function (req, res, next) {
  if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
    next();
  } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
      //Redirect if not HTTP with original request URL
      res.redirect('https://' + req.hostname + req.url);
  }
});

app.use('',express.static(__dirname + '/public/'));

// the below line enables files to show as webpage
// app.use('/public', serveIndex('platforms/browser/www')); // shows you the file list - Useful for Debug purpose only

// start server on the specified port and binding host
var environment=process.env.APP_ENV;

app.listen(port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
})

