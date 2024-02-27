const express=require('express')
const router=express.Router()
const {RegisterUser,Authuser} =require('../Controllers/userController.js')

router.post('/signup',RegisterUser);
router.post('/',Authuser)



module.exports=router;