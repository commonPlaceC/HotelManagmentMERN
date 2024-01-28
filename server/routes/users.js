import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    if (!users) {
        res.status(404).json({ err: "No users found" });
    }
    console.log("Users exists");
    res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ err: "No such user" });
    }
    res.status(200).json(user);
});

router.post("/", async (req, res) => {
    const { email, name, passwordHash, role } = req.body;
    try {
        const user = await User.create({
            email,
            name,
            passwordHash,
            role,
        });
        res.status(200).json(user);
        console.log("User object created");
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE query is not available" });
});

router.patch("/:id", async (req, res) => {
    res.json({ mssg: "UPDATE query is not available" });
});

export { router as userRouter };
