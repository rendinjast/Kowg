const mongoose = require('mongoose');
const shortid = require('shortid');

const playlistSchema = new mongoose.Schema({
    name:{type:String ,required:true},
    url: {type:String,default: shortid.generate},
    music:{type:mongoose.Schema.Types.ObjectId,ref:'Music',required:true},
    date:{type:Date,default:Date.now},
    view: {
        day: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        all: { type: Number, default: 0 },
      },
    favorite:{type:Number,default:0}
})


module.exports = mongoose.model('playlist',playlistSchema)