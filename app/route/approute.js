
const router = require('express').Router();

var jwt = require('jsonwebtoken');

const cars = require('../../app/data/cars.json');
const User = require('../../app/models/User');
const items = require('../../app/data/itemGroup.json');
const searchItems = require('../../app/data/searchItem.json');
const suppliers = require('../../app/data/supplier.json');
const orders = require('../../app/data/orderItem.json');

let products=[];

router.get('/',(req,res)=>{
    res.status(200).json({message:'Connected'});
});
router.get('/cars',(req,res)=>{
    res.status(200).json(cars);
});

router.post('/authenticate',(req,res)=>{
    //User.findOne

    var token = jwt.sign(req.body,'123456',{expiresIn:100});
    console.log(token);
    res.status(200).json({token:token});
});

router.post('/verify',(req,res)=>{
    var val = jwt.verify(req.body.token,'123456');
    res.status(200).json({val:val});
});
// search companies
router.get('/api/procurepay/order/searchCompanies/:id',(req,res)=>{
    res.status(200).json(suppliers);
});
// get item group based on company selection
router.get('/api/procurepay/order/searchItemGroups/:id',(req,res)=>{
    res.status(200).json(items);
});
router.get('/api/procurepay/order/serachItems/:id?',(req,res)=>{
    // apply query parameter 
    // http://localhost:8080/api/procurepay/order/searchItems/AS00?ItemGroups=&initial=0&pageSize=10&lower=0&higher=0&search=
    console.log(req.query);
    res.status(200).json(searchItems);
});
// add product
router.post('/api/procurepay/addProduct/:id',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status(200).json({id:req.params.id,body: req.body});

});
// delete product
router.post('/api/procurepay/deleteProduct/:id',(req,res)=>{
    products.pop();
    res.status(200).json({id:req.params.id,data:req.body});
});
// get order details
router.get('/api/procurepay/getCartItems/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).json(products);
});

module.exports = router;