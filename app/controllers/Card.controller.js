const router = require('express').Router();
let Card = require('../models/Card.model');
/**
 * Card Start
 */
router.get('/',(req,res)=>{
    Card.find({}).then(
        (result)=>{res.status(200).json(result);},
        (err)=>{res.status(400).json(err);}
    )
    .catch((error)=>{throw error});
});

router.get('/:id',(req,res)=>{
    Card.findOne({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(error);})
    .catch((error)=>{
        throw error;
    });
});
router.post('/',(req,res)=>{
    var card = new Card(req.body);
    card.save().then(
        (result)=>{res.status(200).json(result)},
        (error)=>{res.status(400).json(error)}
    )
    .catch((error)=>{throw error});
});

// make a prefered card
router.put('/prefer/:id',(req,res)=>{
    Card.findByIdAndUpdate({_id:req.params.id},{prefered:1}).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

router.put('/:id',(req,res)=>{
    Card.findByIdAndUpdate({_id:req.params.id},req.body).then(
        (result)=>{;res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

router.delete('/:id',(req,res)=>{
    Card.findByIdAndRemove({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result);},
        (error)=>{res.status(400).json(err);}
    ).catch((error)=>{throw error});
});

module.exports = router;