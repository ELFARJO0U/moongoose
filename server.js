const express = require("express");

const app=express()
require("dotenv").config()
const connectdata=require("./config/connectDB")
connectdata()
app.use(express.json())
app.use("/api/contacts",require("./Routes/contact"))
const port=process.env.PORT

app.listen(port,(err)=>
(
    err?
    console.log(err)
    :console.log(`server is runing on ${port}`)
)
)
