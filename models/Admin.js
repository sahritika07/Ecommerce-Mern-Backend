const mongoose =require('mongoose');

// schema
const adminSchema = mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String, required:true, trim:true},
    password :{type:String, required:true,trim:true},
    tc:{type:Boolean,required:true,trim:true}
})

// schema

// model 

const adminModel = mongoose.model("Admin",adminSchema)
//                          name craete in db   based on which schema


module.exports =adminModel;