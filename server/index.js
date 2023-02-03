//express setup
const express = require('express');
const app = express();
const port = 4200


//database setup
const mongoose = require('mongoose');
const databaseInfo = require('./secret');
mongoose.connect(databaseInfo.connect)
const UserModel = require('./models/Users');
const cors = require('cors');


//body parser
app.use(express.json());
app.use(cors())


app.use(require('./routes/authentication'))


// //retrieve messages from db
// app.get("/getMessages", async (req, res) =>{

// })

// //save messages to db
// app.post("/postMessages", (req, res) =>{

// })


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})