const mongoose =require("mongoose")
const userschrma=mongoose.Schema({
username:String,
pass:String,
email:String,
city:String
})
const UserModel=new mongoose.model("user",userschrma)
module.exports=UserModel