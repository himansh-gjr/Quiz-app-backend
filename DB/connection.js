const mongoose = require('mongoose')

const URI = 'mongodb+srv://dbUser:OOhVEFcWOCNOMnJ5@cluster0.o8ryz.mongodb.net/quiz-app?retryWrites=true&w=majority'

const connectDB = async () =>{
    await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log("db connected ..!")
}

module.exports = connectDB