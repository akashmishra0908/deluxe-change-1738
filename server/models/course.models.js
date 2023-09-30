const mongoose =require("mongoose")
const courseschrma=mongoose.Schema({
    _id:String,
title:String,
image:String,
author:String,
rating:Number,
total_ratings:Number,
description:String,
price:Number,
category:String,
duration:String,
email:String
})
const CourseModel=new mongoose.model("course",courseschrma)
module.exports=CourseModel