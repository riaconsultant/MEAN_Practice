var app = require('express')();
var morgan = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./app/route/approute');
const societyrouter = require('./app/route/societyroute');
const apiRoute = require('../app/route/apiroute')

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
});

app.use('/',router);
app.use('/society',societyrouter);
app.use('/api',apiRoute)

app.listen(8080,()=>{
    console.log('App listening on port 3000');
});