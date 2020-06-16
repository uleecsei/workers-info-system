export {}; // fixing block scope variable issue
const {Schema, model, Types} = require('mongoose');


const PostSchema = new Schema({
    postId: {type: Number},
    name: {type: String},
    salary: {type: String},
});


module.exports = model('Post', PostSchema);