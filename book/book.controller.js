const { Mongoose } = require("mongoose");
const bookModel = require("./book.model")

const getBooks = async (req,res,next) => {
    try {
        let books = await bookModel.find({});
        res.send(books)
    }
    catch(err) {
        res.send(err.message)
    }
}

const getBook = async (req,res,next) => {
    try {
        let book = await bookModel.findById(req.params.id);
        res.json(book)
    }
    catch(err) {
        res.send(err)
    }
}

const createBook = async (req,res,next) => {
    let {name, author, pages} = req.body;
    try{
        let result = await bookModel({
            name,
            author,
            pages
        })
        result.save()
        res.sendStatus(201).send(result)
    }
    catch(err) {
        res.send(err.message)
    }
}

const updateBook = async (req,res,next) => {
    let {name, author, pages} = req.body;
    try{
        let result = await bookModel.findByIdAndUpdate(req.params.id,{name,author,pages}, {new:true}).exec()
        res.sendStatus(201).send(result)
    }
    catch(err) {
        res.send(err.message)
    }
}


const deleteBook = async (req,res,next) => {
    try{
        let result = await bookModel.findByIdAndRemove(req.params.id).exec()
        res.sendStatus(201).send(result)
    }
    catch(err) {
        res.send(err.message)
    }
}


module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};
