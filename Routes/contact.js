const express = require("express");
const router=express.Router()
const Contact=require("../model/Contact")
router.get("/test",(req,res)=>{
    res.send("hello")
})
router.post("/add",async(req,res)=>{
    const {name,email,age}=req.body
    if(!name.length || email.length){
        res.status(400).send({msg:"name w email lazem tzidhom"})
    }
    const contact=await Contact.findone({email:email})
    if (contact){
        res.status(400).send({msg:"email mawjoud"})

    }
    try {
        const newcontact=new Contact({name,email,age})
        await newcontact.save()
        res.status(200).send({msg:"contact tzed",newcontact})
    } catch (error) {
        res.status(400).send({msg:"matzedech"})
    }
})
router.get("/",async(req,res)=>{
    try {
        let contactList=await Contact.find()
        res.status(200).send({msg:"hedhy lista mt3na",contactList})
        
    } catch (error) {
        res.status(400).send({msg:"ma3andkch lista",error})
    }
})
router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params;
        let contactToGet=await Contact.find({_id})
        res.status(200).send({masg:"hedha contact mte3na",contactToGet})
    } catch (error) {
        res.status(400).send({msg:"ma3andkch contact",error})
    }
})
router.put("/edit/:_id",async(req,res)=>{
    try {
        let {_id}=req.params
         let {name,email,age}=req.body
         await Conatct.updateOne({_id},{$set:{...req.body}})
         res.status(200).send({masg:"raho sar update"})

    } catch (error) {
        res.status(400).send({msg:"mafamch update",error})
    }
})
router.delete("/delete/:_id",async (req,res)=>{
    try {
        let {_id}=req.params;
        await Contact.deleteOne({_id})
        res.status(200).send({msg:"raho tefsa5"})
    } catch (error) {
        res.status(400).send({msg:"matefsa5ech",error})
    }
})
module.exports=router