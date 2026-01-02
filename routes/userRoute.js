const express = require("express");
const userRouter = express.Router();

const {
  GetHome,
  GetWishlist,
  GetBookings,
  GetHomeDetails,
  PostWishlist,
  RemoveWishlist,
  PostBookings,
  RemoveBookings,
} = require("../controllers/user");

// HOME
userRouter.get("/", GetHome);

// WISHLIST
userRouter.get("/wishlist", GetWishlist);
userRouter.post("/wishlist", PostWishlist);
userRouter.post("/wishlist/:id", RemoveWishlist);

// BOOKINGS
userRouter.get("/bookings", GetBookings);
userRouter.post("/bookings/add", PostBookings);
userRouter.post("/bookings/cancel", RemoveBookings);

// HOME DETAILS
userRouter.get("/homes/:id", GetHomeDetails);

module.exports = userRouter;
