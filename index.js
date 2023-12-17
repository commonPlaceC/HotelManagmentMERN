const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;
const URL = "mongodb+srv://admin:pass@cluster0.bt3vkwf.mongodb.net/";
const app = express();

async function start() {
  try {
    await mongoose.connect(URL, {}).then(result => console.log("database connected"));

    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
  } catch (err) { console.log(err); }
}

start()