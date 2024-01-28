import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["GUEST", "EMPLOYEE"],
        defaul: "GUEST",
    }
}, {
    timestamps: true,
});

export default mongoose.model("User", UserSchema);