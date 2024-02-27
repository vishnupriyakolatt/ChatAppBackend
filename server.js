const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const userRoutes=require('./routes/userRoutes.js')

dotenv.config();
connectDB()
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.use('/api/user',userRoutes)
app.listen(5000,()=>{
    console.log(`server is start running on port ${5000}`)
})