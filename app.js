var app = require('express')();
var morgan = require('morgan');
var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var router = require('./app/route/approute')

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
});

app.use('/',router);

app.listen(8080,()=>{
    console.log('App listening on port 3000');
});