const express = require("express");
const userRouter = express.Router();

const {
  GetHome,
  GetWishlist,
  GetBookings,
  GetHomeDetails,
  PostWishlist,
  RemoveWishlist,
} = require("../controllers/user");

userRouter.get("/", GetHome);
userRouter.get("/wishlist", GetWishlist);
userRouter.post("/wishlist", PostWishlist);
userRouter.post("/wishlist/:id", RemoveWishlist);

userRouter.get("/bookings", GetBookings);
userRouter.get("/homes/:id", GetHomeDetails);

module.exports = userRouter;
