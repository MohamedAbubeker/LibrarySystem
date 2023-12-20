var express = require("express");
var cors = require("cors");
/* // const multer = require("multer"); */
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
var app = express();

//allow the server to accept json from the DB 
app.use(express.json());  
//app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  console.log(new Date() + " || request method: " + req.method + " || on url: " + req.url);
  next();
})
//routes

const reservationRoute = require('./routes/ReservationRoute')
app.use('/library', reservationRoute)

const bookRoute = require('./routes/BookRoute')
app.use('/library', bookRoute)

const MemberRoute = require('./routes/MemberRoute')
app.use('/library', MemberRoute)

const LibraryRoute = require('./routes/LibraryRoute')
app.use('/library', LibraryRoute)








mongoose.connect(process.env.MONGODB_URL, {dbName: 'LibrarySystem'})
  .then(() => console.log('Connected to MongoDB Atlas...'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas...', err));






//start the express app and listen to the port 
app.listen(process.env.PORT, () => {
     console.log("server is running on port: 4000" + " MongoDB connection is successful" );
    
})