const  mongoose = require("mongoose");
const {Schema}=mongoose
const contactSchema=new Schema({
   name:{type:String,required:true},
   email:{type:String,required:true ,unique:true},
   age:Number
})
module.exports=Contact=mongoose.model("Contact",contactSchema)