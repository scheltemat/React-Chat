const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const UserModel = require("../models/Users")


router.use(express.urlencoded({extended: true})) // scrape email and pwd from request header 
router.use(express.json())  //req.body


//register new user
router.post("/createUser", async (req, res) => {
    const user = req.body //data passed from front end form
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

//user login
router.post('/login', async (req, res) => {
    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    })
    if(user){
        return res.json({status: 'ok', user: true})
    }
    else {
        return res.json({status: 'error', user: false})
    }
})

module.exports = router