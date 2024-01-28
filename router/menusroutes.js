const express = require ('express');
const router = express.Router();
const menu = require('./../models/menu');



router.post('/',async(req,res)=>{
    try{
      const data = req.body// Assuming the requested body contains the person data
      //craete a new person document using the Mongoose model
      const newMenu= new menu(data);
    
      //save the new person to the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal error server"});
    
    
    }
    })

router.get('/',async(req,res)=>{
    try{
      const data = await menu.find();
      console.log('data feteched');
      res.status(200).json(data);
    }
    
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal error server"});
    
    
    }
    })

    module.exports=router;