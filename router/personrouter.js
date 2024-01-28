const express = require ('express');
const router = express.Router();
const person = require('./../models/person');


router.post('/',async(req,res)=>{
    try{
      const data = req.body// Assuming the requested body contains the person data
      //craete a new person document using the Mongoose model
      const newPerson= new person(data);
    
      //save the new person to the database
      const response = await newPerson.save();
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
          const data = await person.find();
          console.log('data feteched');
          res.status(200).json(data);
        }
        
        catch(err){
          console.log(err);
          res.status(500).json({error:"Internal error server"});
        
        
        }
        })


    router.get('/:workType',async(req,res)=>{
        try{
        
        const workType = req.params.workType;
        if(workType=='chef'|| workType=='waiter'|| workType=='manager' ){
        const response = await person.find({work: workType});
        console.log('response feteched');
        res.status(200).json(response);
        }
        else{
                res.status(484).json({error:"Invalid work types"})
        }
        }
  
        catch(err){
          console.log(err);
          res.status(500).json({error:"Internal error server"});
  
        }
  
      })

      module.exports=router;