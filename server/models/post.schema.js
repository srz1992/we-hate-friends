const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: String, required: true, unique: true},
    post: {type: String, required: true}
})

module.exports = mongoose.model('post', postSchema)