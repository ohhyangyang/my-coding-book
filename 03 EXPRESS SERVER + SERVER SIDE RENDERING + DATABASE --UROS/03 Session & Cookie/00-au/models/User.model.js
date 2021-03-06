const mongoose = require('mongoose')
const Schema = mongoose.Schema

//CREATE SCHEMA
const userSchema = new Schema({
    username:{type:String,unique:true},
    password:String
},
{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
})


const User = mongoose.model('User',userSchema) //users collection
module.exports =User