const express= require('express')
const router = express.Router()
const book = require("./book.controller")

router.get("/", book.getBooks)
router.get("/:id", book.getBook)
router.post("/", book.createBook)

router.put("/:id", book.updateBook)
router.delete("/:id", book.deleteBook)


module.exports = router

