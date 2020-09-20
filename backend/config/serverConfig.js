var express = require('express'); //rota 
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


consign().include('config/dbConnection.js')
    .then('api/models')
    .then('api/routes')
    .then('api/controllers').into(app);


module.exports = app;