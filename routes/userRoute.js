const express = require("express");
const userRouter = express.Router();
const {
  GetHome,
  GetWishlist,
  GetBookings,
  GetHomeDetails,
} = require("../controllers/user");

userRouter.get("/", GetHome);
userRouter.get("/wishlist", GetWishlist);
userRouter.get("/bookings", GetBookings);
userRouter.get("/homes/:id", GetHomeDetails);

module.exports = userRouter;
