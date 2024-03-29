import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
    
}, {
    timestamps: true,
});

export default mongoose.model("Room", RoomSchema);
