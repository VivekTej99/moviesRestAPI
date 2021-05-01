const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const movieController = require('./controllers/movieController');

app.use(bodyParser.json());
app.use('/movie',movieController);


app.get('/',(req,res)=>{
    res.send(`Api is working`);
})


const connectionUri = process.env.DB_CONNECTION;

mongoose.connect(connectionUri,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('Connected to DB');
})

app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`);
})