const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
name:{tyepe:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
pic:{type:String,required:true,default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
},
{timeStamps:true})
const User=mongoose.model("UserSchema",UserSchema)

module.exports=User