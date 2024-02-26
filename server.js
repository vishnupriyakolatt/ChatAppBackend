const express=require('express')
const dotenv=require('dotenv')

const app=express()
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Api is running")
})


app.listen(5000,()=>{
    console.log(`server is start running on port ${5000}`)
})