const mongoose=require('mongoose')

const chatModel=mongoose.Schema(
    {
        chatName:{type:String,trim:true},
        isGroupChat:{type:Boolean,default:false},
        users:[{
           type:mongoose.Schema.Types.objectId,
           ref:"User"
        }],
        latestMessage:{
            type:mongoose.Schema.Types.objectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.objectId,
            ref:"User",

        },
     
    },
    {
        timeStamps:true,
    }
)
const Chat=mongoose.model("Chat",chatModel )
module.exports=Chat