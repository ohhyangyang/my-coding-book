const mongoose = require('mongoose');

//Schema constructor
const Schema = mongoose.Schema;

const paymentSchema = require('../schemas/paymentSchema')

//Create the Schema - rule for eah document
const clientSchema = new Schema({
    name:{ type:String, required:true},//, unique:true 也可以声明必须为唯一值
    age:{ type:Number,required:true,min:18,max:99 },
    accountActive:{ type:Boolean,default:true },
    balance:{ type:Number,require:true,default:0 },
    //payments:{ type:[paymentSchema],require:true } 
                  //⚠️⚠️要求必须是装有obj的数组，并规定了每个对象中的内容
})

//Create the Model (client collection)
const Client = mongoose.model('Client',clientSchema);

//Export the Model
module.exports = Client;
