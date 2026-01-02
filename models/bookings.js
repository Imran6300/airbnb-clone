// models/bookings.js
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // optional for now
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
