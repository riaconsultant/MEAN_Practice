var app = require('express')();
var morgan = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var mysql = require('mysql');
var promise = mongoose.connect('mongodb://localhost/mydb');
var mysql_connect = mysql.createConnection({host: 'localhost', user:'manu', password: '1234', database: 'society'});
var router = require('./app/route/approute');
// const societyrouter = require('./app/route/societyroute');
const apiRoute = require('./app/route/apiroute')
var compression = require('compression');
var helmet = require('helmet');
// const passport = require('passport');
const authenticate = require('./app/authentication');

// app.use(passport.initialize());
// app.use(passport.session());

app.use(compression());
app.use(helmet());

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
});

app.get('/',(req,res)=>{
    res.status(200).json('process.env');
});

app.get('/dbconn', (req,res) => {
    mysql_connect.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!");  
      });  
    mysql_connect.query('select count(*) form test', (err, result) => {
        if(err)
            console.log(err);
        
        console.log('result', result);
        const conn = true;
        res.status(200).json({connect: result});
    });
});

//app.use('/',router);
// app.use('/society',societyrouter);
app.use('/api',apiRoute)

app.listen(3000,()=>{
    console.log('App listening on port 3000');
});