import express from "express";
import Reservation from "../models/Reservation.js";
import { Types } from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
    Reservation.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "guestId",
                foreignField: "_id",
                as: "guestData",
            },
        },
        {
            $unwind: {
                path: "$guestData",
            },
        },
        {
            $set: {
                guestName: "$guestData.name",
            },
        },
        {
            $unset: "guestData",
        },
        {
            $lookup: {
                from: "rooms",
                localField: "roomId",
                foreignField: "_id",
                as: "roomData",
            },
        },
        {
            $unwind: {
                path: "$roomData",
            },
        },
        {
            $set: {
                roomNumber: "$roomData.number",
            },
        },
        {
            $unset: "roomData",
        },
    ])
        .then((reservations) => {
            res.status(200).json(reservations);
            console.log("Reservations exist");
        })
        .catch((err) => {
            res.status(404).json({ err: `${err}` });
        });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    Reservation.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "guestId",
                foreignField: "_id",
                as: "guestData",
            },
        },
        {
            $unwind: {
                path: "$guestData",
            },
        },
        {
            $set: {
                guestName: "$guestData.name",
            },
        },
        {
            $unset: "guestData",
        },
        {
            $lookup: {
                from: "rooms",
                localField: "roomId",
                foreignField: "_id",
                as: "roomData",
            },
        },
        {
            $unwind: {
                path: "$roomData",
            },
        },
        {
            $set: {
                roomNumber: "$roomData.number",
            },
        },
        {
            $unset: "roomData",
        },
    ])
        .then((reservation) => {
            res.status(200).json(reservation);
            console.log("Reservation has been found");
        })
        .catch((err) => {
            res.status(404).json({ err: `${err}` });
        });
});

router.post("/", async (req, res) => {
    const { date, guestId, roomId, status, outDate } = req.body;
    try {
        const reservation = await Reservation.create({
            date,
            guestId,
            roomId,
            status,
            outDate,
        });
        res.status(200).json(reservation);
        console.log("Reservation object created");
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE a reservation" });
});

router.patch("/:id", async (req, res) => {
    res.json({ mssg: "UPDATE a reservation" });
});

export { router as reservationsRouter };
