const mongoose = require ('mongoose')

const mongoDb = (url)=>{
    mongoose.connect(url)
}

module.exports = mongoDb