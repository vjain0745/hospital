const express = require('express');
const router = express.Router();
const patientdetails = require('../modules/patients');
const surgeondetails = require('../modules/surgeon');
const refdetails = require('../modules/referrals');
const diagdetails = require('../modules/diagnostictest');
const waitinglist= require('../modules/surgicalwaitinglist');
const { json } = require('body-parser');
const { Mongoose } = require('mongoose');

router.get("/" , (req,res)=>
{
    res.send("hey");
});


// name of patients
//

router.get("/patient/:id", async(req,res)=>
{
   
    try {
        res.json({
            list : await patientdetails.find({_id: req.params.id}) 
        })
        } catch (error) {console.log(error);} 
        
        });


router.post("/patient", (req,res)=>
{
    var values = {
        name:req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        id: req.body.id
       
      };
      console.log(values);
      patientdetails.create(values, (error, patientdetails)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
       
  
});

router.put("/patient/:id",async(req,res)=>
{
    const id = req.params.id;
    const updates = req.body;
    const options = {new:true};
    const re = await patientdetails.findByIdAndUpdate(id , updates, options);
    res.send("done updating");
});    

router.delete("/patient/:id",(req,res)=>
{
    patientdetails.findByIdAndDelete(req.params.id,(req,res)=>
    {
        console.log("deleted as per request");
       
    })
    
});


// waiting list of patients
//

router.get("/surgicalwaiting/:id", async(req,res)=>
{
   
    try {
        res.json({list : await waitinglist.find({_id: req.params.id}).populate("name").populate("surgeonname")
     })
        } catch (error) {console.log(error);} 
        
        });


router.post("/surgicalwaiting", (req,res)=>
{
    var waitingpatients = {
        
        name: req.body.name,
        placementdate:req.body.placementdate,
        removaldate:req.body.removaldate,
        surgeonname: req.body.surgeonname,
        typeofoperation:req.body.typeofoperation,
        priority:req.body.priority,
        
       
      };
      
      waitinglist.create(waitingpatients, (error, waitinglist)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
       
  
});

router.put("/surgicalwaiting/:id",async(req,res)=>
{
    const id = req.params.id;
    const updates = req.body;
    const options = {new:true};
    const re = await waitinglist.findByIdAndUpdate(id , updates, options);
    res.send("done updating");
});   

router.delete("/surgicalwaiting/:id",async(req,res)=>
{
    waitinglist.findByIdAndDelete(req.params.id,(req,res)=>
    {
        console.log("deleted as per request");
        
    })
    
});

// surgeon details 
//
//
router.get("/surgeondetails/:id",async(req,res)=>
{
   try {
    res.json({ list: await surgeondetails.findOne({_id: req.params.id})
 })
   } catch (error) {
       console.log(error);
   } 
});

router.post("/surgeondetails", (req,res)=>
{
    var surgeonvalues = {
      _id : req.body._id,
       name: req.body.name,
       speciality:req.body.speciality 
       
      };


     
      surgeondetails.create(surgeonvalues, (error, surgeondetails)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
       
  
});

router.delete("/surgeondetails/:id",(req,res)=>
{
    surgeondetails.findByIdAndDelete(req.params.id,(req,res)=>
    {
        console.log("deleted as per request");
        console.log(surgeonvalues);
    })
    
});

router.put("/surgeondetails/:id",async(req,res)=>
{
    const id = req.params.id;
    const updates = req.body;
    const options = {new:true};
    const re = await surgeondetails.findByIdAndUpdate(id , updates, options);
    res.send("done updating");
});    

// referrals
//


router.get("/referrals/:id", async(req,res)=>
{
   
    try {
        res.json({
         List: await refdetails.find({_id: req.params.id}).populate("name").populate("surgeonname") })
        } catch (error) {console.log(error);} 
        
        });


router.post("/referrals", (req,res)=>
{
    var referral = {
        name:req.body.name,
        appointmentdate:req.body.appointmentdate,
        date:req.body.date,
        surgeonname:req.body.surgeonname,
        priority:req.body.priority,
        
       
      };
      refdetails.create(referral, (error, refdetails)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
       
  
});

router.delete("/referrals/:id",(req,res)=>
{
    refdetails.findByIdAndDelete(req.params.id,(req,res)=>
    {
        res.send("deleted as per request");
       
    })
    
});

router.put("/referrals/:id",async(req,res)=>
{
    const id = req.params.id;
    const updates = req.body;
    const options = {new:true};
    const re = await diagdetails.findByIdAndUpdate(id , updates, options);
    res.send("done updating");
});    

//
//diagnostic test

router.get("/diagtest/:id", async(req,res)=>
{
   
    try {
        res.json({
         List: await diagdetails.find({_id: req.params.id}).populate("name").populate("surgeonname") })
        } catch (error) {console.log(error);} 
        
        });




router.post("/diagtest", (req,res)=>
{
    var diagtest = {
        name:req.body.name,
        result:req.body.result,
        test:req.body.test,
        dateordered:req.body.dateordered,
        surgeonname:req.body.surgeonname,
        dateofresult:req.body.dateofresult,
        
       
      };
      
      diagdetails.create(diagtest, (error, diagdetails)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
       
  
});

router.put("/diagtest/:id",async(req,res)=>
{
    const id = req.params.id;
    const updates = req.body;
    const options = {new:true};
    const re = await diagdetails.findByIdAndUpdate(id , updates, options);
    res.send("done updating");
    
      
});


router.delete("/diagtest/:id",(req,res)=>
{
    diagdetails.findByIdAndDelete(req.params.id,(req,res)=>
    {
        res.send("deleted as per request");
       
    })
    
});

module.exports = router;
