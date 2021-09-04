const mongoose = require('mongoose')



const user  = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    // scores:mongoose.Schema.Types.Mixed
    scores:[String]
  })

const User = mongoose.model('Users',user)

module.exports = User