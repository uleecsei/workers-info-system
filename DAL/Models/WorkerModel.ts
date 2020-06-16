const {Schema, model, Types} = require('mongoose');


const WorkerSchema = new Schema({
    workerId: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
    posts: {type: Types.ObjectId, ref: 'Post'},
});


module.exports = model('Worker', WorkerSchema);
