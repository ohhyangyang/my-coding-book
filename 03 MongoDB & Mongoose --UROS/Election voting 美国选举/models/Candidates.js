const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidatesShcema = new Schema({
    name:String,
    nickname:String,
    catchphrase:String,
    votes:{
        type:Number,
        min:0,
        default:0
    }
});

const Candidate = mongoose.model('Candidate',candidatesShcema)

module.exports=Candidate;
