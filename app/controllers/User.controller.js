const userRouter = require('express').Router();
let userModel = require('../models/User.model');

userRouter.get('/',(req,res)=>{
    res.status(200).json({data:"sa"});
})

userRouter.post('/signupnews',(req,res)=>{
    res.status(200).json(req.body);
})

userRouter.post('/signup',(req,res)=>{

    res.status(200).json(req.body);
});

userRouter.post('/approve',(req,res)=>{

});

userRouter.post('/reject',(req,res)=>{

});

userRouter.put('/',(req,res)=>{

});

userRouter.delete('/',(req,res)=>{

});

userRouter.get('/authenticate',(req,res)=>{
    let token={
        "access_token": "00D2100000091qI!AREAQGXlHfn0dgdKwNvyskvh4UWZ3HS3N0PztASJeUQ_pQnKuy9KUvPhc_dP0okRFee3f6O6NPCqucBXnAckAZmpNHfOyhms",
        "instance_url": "https://cs26.salesforce.com",
        "id": "https://test.salesforce.com/id/00D2100000091qIEAQ/00550000001sWAaAAM",
        "token_type": "Bearer",
        "issued_at": "1512994649023",
        "signature": "gKNSW8DE8piPAHnoJcqDi1ptbz4N3CBjBPJ4Hrznokc="
    };
    res.status(200).json(token);
});

userRouter.get('/logout',(req,res)=>{
    
});

userRouter.get('/users',(req,res)=>{
    res.status(200).json(users)
});

userRouter.get('/users/:id',(req,res)=>{
    res.status(200).json(userprofile)
});

userRouter.get('/roles',(req,res)=>{
    res.status(200).json(roles);
});


module.exports = userRouter;