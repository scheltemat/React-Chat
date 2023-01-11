//express setup
const express = require('express');
const app = express();
const port = 3001

//database setup
const mongoose = require('mongoose');
const databaseInfo = require('./secret');
mongoose.connect(databaseInfo.connect)
const UserModel = require('./models/Users');


//body parser
app.use(express.json());

//register new user
app.post("/createUser", async (req, res) =>{
    const user = req.body //data passed from front end form
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

//find user data
app.get("/getUsers", (req, res) =>{
    UserModel.find({}, (err, result) =>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})

// //retrieve messages from db
// app.get("/getMessages", async (req, res) =>{

// })

// //save messages to db
// app.post("/postMessages", (req, res) =>{

// })


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})