const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:String,
    pages: Number
    
}, {timestamps: true})

const bookModel = mongoose.model('book',BookSchema)
module.exports = bookModel