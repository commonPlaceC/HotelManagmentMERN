import express from "express";
import "dotenv/config.js";
import { connect } from "mongoose";

import { reservationsRouter } from "./routes/reservations.js";
import { userRouter } from "./routes/users.js";
import { roomRouter } from "./routes/rooms.js";

//express app
const app = express();

//middleware
app.use(express.json());
app.use('/api/reservations', reservationsRouter);
app.use('/api/users', userRouter);
app.use('/api/rooms', roomRouter);

//app start
async function start() {
    try {
        //connect to db
        await connect(process.env.DB_URI);
        console.log("MonogoDB connected successfully");
        //listen port
        app.listen(process.env.PORT, (err) => {
            err
                ? console.log(err)
                : console.log(`Listening on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();