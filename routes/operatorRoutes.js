const express = require("express");
const router = express.Router();
const operatorSchema = require("../Model/operatorModel")

router.post('/',async(req,res)=>{
    try {
        const { operator,ship } = req.body;
        if(!operator || !ship){
            res.status(400).json({ message: "Missing data", data: "" , success : false , status : 400 });
        }

        const operatorData  = new operatorSchema({
            operator : operator,
            ship : ship
        })

        const result = await operatorData.save();
        console.log("---result--",result)
        if(result){
            res.status(200).json({ message: "Successfully Insert Operator", data: result , success : true , status : 200 });
        }else{
            res.status(400).json({ message: "Error in Data Insert", data: "" , success : false , status : 400 });
        }        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", data: "" , success : false , status : 500 });
    }
})

router.get('/',async(req,res)=>{
    try {
        const result = await operatorSchema.find();
        // console.log("---result--",result)
        if(result){
            res.status(200).json({ message: "Fetch Data Successfully ", data: result , success : true , status : 200 });
        }else{
            res.status(400).json({ message: "Error in Fetching Data", data: "" , success : false , status : 400 });
        }        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", data: "" , success : false , status : 500 });
    }
})


module.exports = router;


