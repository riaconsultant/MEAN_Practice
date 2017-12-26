const userRouter = require('express').Router();
let UserModel = require('../models/User.model');
let RoleModel = require('../models/Role.model')

userRouter.get('/',(req,res)=>{
    UserModel.find({}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

userRouter.get('/:id',(req,res)=>{
    UserModel.find({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

userRouter.post('/signup',(req,res)=>{
    var usr = new UserModel(req.body);
    usr.save().then(
        (result)=>{res.status(200).json(result)},
        (error)=>{res.status(400).json(error)}
    )
    .catch((error)=>{throw error});
});

userRouter.post('/approve/:id',(req,res)=>{
    UserModel.findByIdAndUpdate({_id:req.params.id},{status:1}).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

userRouter.post('/reject/:id',(req,res)=>{
    UserModel.findByIdAndUpdate({_id:req.params.id},{status:2}).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

userRouter.put('/:id',(req,res)=>{
    UserModel.findByIdAndUpdate({_id:req.params.id},req.body).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

userRouter.delete('/:id',(req,res)=>{
    UserModel.findByIdAndRemove({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

userRouter.get('/authenticate',(req,res)=>{
    
    let token={
        
    };
    res.status(200).json(token);
});

userRouter.get('/logout',(req,res)=>{
    
});

userRouter.get('/role/all',(req,res)=>{
    RoleModel.find({}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

userRouter.get('/role/:id',(req,res)=>{
    RoleModel.find({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

userRouter.post('/role',(req,res)=>{
    var role = new RoleModel(req.body);
    role.save().then(
        (result)=>{res.status(200).json(result)},
        (error)=>{res.status(400).json(error)}
    )
    .catch((error)=>{throw error});
});

userRouter.put('/role/:id',(req,res)=>{
    RoleModel.findByIdAndUpdate({_id:req.params.id},req.body).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

userRouter.delete('/role/:id',(req,res)=>{
    RoleModel.findByIdAndRemove({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});



module.exports = userRouter;