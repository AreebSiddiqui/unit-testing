const express = require("express");
const connectDB = require("./db");
const books = require('./book/book.routes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));


app.use("/book",books)


connectDB();
app.listen(3000);

module.exports = app
