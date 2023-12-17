const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;
const URL = "localhost:27017/HotelDb";
const app = express();

mongoose.connect(URL, {}).then(result => console.log("database connected")).catch(err => console.log(err));
 
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});