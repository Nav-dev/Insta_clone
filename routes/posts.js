const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
 picture: String,
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
 },
 caption:String,
 date:{
    type:Date,
    default:Date.now
 },
 likes:[
    {type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    }
 ],
});

module.exports = mongoose.model("post", postSchema);