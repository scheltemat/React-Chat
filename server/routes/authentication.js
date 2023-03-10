const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require("../models/Users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.use(express.urlencoded({extended: true})) // scrape email and pwd from request header 
router.use(express.json())  //req.body


//register new user
router.post("/createUser", async (req, res) => {
    const user = req.body //data passed from front end form

    let emailRecords = await UserModel.find({email: user.email})
    let usernameRecords = await UserModel.find({username: user.username})
    
    //check to see if user exists in db
    if(emailRecords.length === 0 && usernameRecords.length === 0){
        //rewriting user.password as hashed password
        user.password = await bcrypt.hash(user.password, 10)
        //saving user to db
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
    } else {
        return res.status(422).json({error: "Email or username already in use"})
    }
})

//user login
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({
        username: username
    })
    if(user){
        //checking hashed password
        const validPassword = await bcrypt.compare(password, user.password)
        if(validPassword){
            const token = jwt.sign({
                username: user.username
                }, 'secret123'
            )
            return res.json({status: 'ok', user: token})
        } else {
            return res.json({status: 'error', user: false})
        }
    }
})

module.exports = router