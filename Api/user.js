const express = require('express')
const User = require('../DB/Users')
const router = express.Router()

router.post('/new-user', async (req,res)=>{
    const { name } = req.body
    let userName = await User.findOne({name:name})
    if(userName){
        return res.send("User already exists !!")
    }
    let user = {name,scores:[]}
    let userObj = new User(user)
    await userObj.save()
    res.json(userObj)
})

router.patch('/add-results', async (req,res)=>{
    const { name,newScore } = req.body
    let user = await User.findOne({name:name})
    if(!user){
        return res.send("User don't exists !!")
    }

    let prevScores = user.scores
    let newScores = [JSON.stringify(newScore),...prevScores]

    const result = await User.findOneAndUpdate({name:name},{scores:newScores},{new:true})
    return res.json(result)
})

module.exports = router