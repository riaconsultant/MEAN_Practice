
const router = require('express').Router();
const cars = require('../../app/data/cars.json');
const User = require('../../app/models/User');
const items = require('../../app/data/itemGroup.json');
const searchItems = require('../../app/data/searchItem.json');
const suppliers = require('../../app/data/supplier.json');
const orders = require('../../app/data/orderItem.json');

router.get('/',(req,res)=>{
    res.status(200).json({message:'Connected'});
});
router.get('/cars',(req,res)=>{
    res.status(200).json(cars);
});

router.post('/authenticate',(req,res)=>{
    //User.findOne
});
// search companies
router.get('/api/procurepay/order/searchCompanies',(req,res)=>{
    res.status(200).json(suppliers);
});
// get item group based on company selection
router.get('/api/procurepay/order/searchItemGroups',(req,res)=>{
    res.status(200).json(items);
});
router.get('/api/procurepay/order/serachItems',(req,res)=>{
    res.status(200).json(searchItems);
});
// add product
router.get('/api/procurepay/addProduct',(req,res)=>{
    res.status(200).json(req.params);

});
// delete product
router.get('/api/procurepay/deleteProduct',(req,res)=>{
    res.status(200).json(req);
});
// get order details
router.get('/api/procurepay/getCartItems',(req,res)=>{
    res.status(200).json(orders);
});





module.exports = router;