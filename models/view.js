const mongoose = require('mongoose');
const shortid = require('shortid');

const viewSchema = new mongoose.Schema({
    ip:{type:String ,required:true},
    music:{type:mongoose.Schema.Types.ObjectId,ref:'Music',required:true},
    date:{type:Date,default:Date.now}
})


module.exports = mongoose.model('view',viewSchema)