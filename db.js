const mongoose = require('mongoose');
const config = require("config")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    })
    console.log(`Server started at ${conn.connection.host}`)
  }
  catch(err){
    console.log(`Error connecting to server: ${err}`)
  }
}

module.exports = connectDB