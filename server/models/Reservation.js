import mongoose, { Schema } from "mongoose";

const ReservationSchema = new Schema(
	{
		date: {
			type: String,
			required: true,
		},
		guestId: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		roomId: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		status: {
			type: String,
			enum: ["ACTIVE", "CREATED", "PAUSED", "CANCELLED"],
			default: "CREATED",
		},
		outDate: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Reservation", ReservationSchema);
