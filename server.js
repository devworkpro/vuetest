
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');


var configDB = require('./config/database.js');

// configuration ===============================================================

mongoose.connect(configDB.url, { useMongoClient: true }); // connect to our database
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// routes ======================================================================
require('./app/routes.js')(app); 


app.listen(port);
console.log('The magic happens on port ' + port);