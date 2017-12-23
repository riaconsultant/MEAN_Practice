const router = require('express').Router();

const jwt = require('jsonwebtoken');

const hello={"text":"hello World"};
/** Controllers */

const addressController = require('../controllers/Address.controller');
const cardController = require('../controllers/Card.controller');
const orderController = require('../controllers/Order.controller');
const userController = require('../controllers/User.controller');
router.get('/',(req,res)=>{
    let routeData=[];
    router.stack.forEach(element => {
        let obj={};
        // obj.path=element.route.path;
        // obj.method=element.route.stack[0].method;
        routeData.push(obj);
    });
    //routeData.push(router.stack);
    res.status(200).json(router.stack);
});

router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
});

router.use('/user',userController);
router.use('/order',orderController);
router.use('/card',cardController);
router.use('/address',addressController);


router.get('/donations',(req,res)=>{
    res.status(200).json(donations);
});

router.get('/articles',(req,res)=>{
    res.status(200).json(article);
    
});



module.exports = router;