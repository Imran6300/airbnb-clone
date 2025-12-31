const express = require("express");
const userRouter = express.Router();
const { GetHome, GetWishlist, GetBookings } = require("../controllers/user");

userRouter.get("/", GetHome);
userRouter.get("/wishlist", GetWishlist);
userRouter.get("/bookings", GetBookings);

module.exports = userRouter;
