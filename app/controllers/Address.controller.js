const router = require('express').Router();
let Address = require('../models/Address.model');
/**
 * Address Start
 */
// Show All Address
router.get('/',(req,res)=>{
    Address.find({}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

// Specific id based address
router.get('/:id',(req,res)=>{
    Address.findOne({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(error);})
    .catch((error)=>{
        throw error;
    });
});
// Save Address
router.post('/',(req,res)=>{
    var addr = new Address(req.body);
    addr.save().then(
        (result)=>{res.status(200).json(result)},
        (error)=>{res.status(400).json(error)}
    )
    .catch((error)=>{throw error});
});
// make a prefered address
router.put('/prefer/:id',(req,res)=>{
    Address.findByIdAndUpdate({_id:req.params.id},{prefered:1}).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});
// Update Address
router.put('/:id',(req,res)=>{
    Address.findByIdAndUpdate({_id:req.params.id},req.body).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});
// Delete Address
router.delete('/:id',(req,res)=>{
    Address.findByIdAndRemove({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

module.exports = router;