const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const userRoutes=require('./routes/userRoutes.js')
const{notFound,errorHandler}=require('./middlewares/errorMiddleware')
dotenv.config();
connectDB()
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.use('/api/user',userRoutes)

app.use(notFound);
app.use(errorHandler);


app.listen(5000,()=>{
    console.log(`server is start running on port ${5000}`)
})