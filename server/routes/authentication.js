const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const UserModel = require("../models/Users")


//register new user
router.post("/createUser", async (req, res) =>{
    const user = req.body //data passed from front end form
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

module.exports = router