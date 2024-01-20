import express from "express";
import { connect } from "mongoose";

import UserModel from "./server/models/User.js";

const PORT = 5000;
const URL = "mongodb+srv://admin:pass@cluster0.bt3vkwf.mongodb.net/hotel?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
const app = express();

app.use(express.json());


async function start() {
  try {
    await connect(URL);
    console.log("MonogoDB connected");
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
  } catch (err) { console.log(err); }
}

start()

const doc = new UserModel({
  email: "test1@mail.ru",
  passwordHash: "1234",
  role: "Guest",
});

