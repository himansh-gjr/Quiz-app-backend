const express = require("express")
const connectDB = require('./DB/connection')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json({extended:false}))

connectDB()

app.get('/', (req,res)=>{
    res.send("HOME")
})

app.use('/api',require('./Api/user'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is listing on port ${port}...`);
})