const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("login", loginSchema);