const srouter = require('express').Router();

srouter.get('/hello',(req,res)=>{
    res.status(200).json('hello');
});
srouter.post('/authentication',(req,res)=>{

});
srouter.get('/logout',(req,res)=>{

});
srouter.get('/profile/:id',(req,res)=>{

});
srouter.post('/profile/edit/:id',(req,res)=>{

});
srouter.post('/profile/activate/:id',(req,res)=>{

});
srouter.post('/forgetpassword',(req,res)=>{

});
srouter.post('/changepassword',(req,res)=>{

});
srouter.post('/signup',(req,res)=>{

});

module.exports=srouter;