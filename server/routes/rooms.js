import express from 'express';
import Room from "../models/Room.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const rooms = await Room.find({}).sort({createdAt: -1});
    if (!rooms) {
        return res.status(404).json({err: "No rooms found"});
    }
    res.status(200).json(rooms);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const room = await Room.findById(id);
    if (!room) {
        return res.status(404).json({ err: "No such room" });
    }
    console.log(`Room with id '${id}' has been found`);
    res.status(200).json(room);
});

router.post("/", async (req, res) => {
    const { number, description } = req.body;
    try {
        const room = await Room.create({
            number,
            description
        });
        res.status(200).json(room);
        console.log("Room created");
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE query is not available" });
});

router.patch("/:id", async (req, res) => {
    res.json({mssg: "UPDATE query is not available"});
});

export { router as roomRouter };