const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const messageRouter = require('./routes/router')

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/messages', messageRouter);

const DB_NAME = 'list';
const DB_URL = process.env.MONGODB_URL || `mongodb://localhost:27017/${DB_NAME}`
mongoose.connect(DB_URL);

mongoose.connection.on('connected', ()=>{
    console.log('mongoose is connected to ', DB_URL);  
})

mongoose.connection.on('error', (error)=>{
    console.log('mongoose connection error:', error);  
})

app.listen(port, ()=>{
    console.log('listening on port:', port); 
})