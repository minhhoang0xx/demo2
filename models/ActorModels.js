const mongoose = require('mongoose');

const ActorSchema = mongoose.Schema({
    name: String,
    age:String,
    country:String,
    liveIn:String,
    Img:String,
})

const ActorModels = mongoose.model('dienvien', ActorSchema,'a1');
module.exports = ActorModels;