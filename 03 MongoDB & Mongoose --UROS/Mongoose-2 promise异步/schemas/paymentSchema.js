const mongoose = require('mongoose');

//Schema constructor
const Schema = mongoose.Schema;

//create payment small schema
const paymentSchema = new Schema({
    date:{type:Date,default:Date.now},
    amount:{type:Number,default:0}
})

module.exports = paymentSchema;