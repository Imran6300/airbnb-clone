const Home = require("../models/homes");
const Wishlist = require("../models/wishlist");
const mongoose = require("mongoose");

// HOME LIST
exports.GetHome = async (req, res) => {
  const homes = await Home.find();
  res.render("user/homes", {
    title: "Home Page",
    homes,
  });
};

// WISHLIST PAGE (NO userId)
exports.GetWishlist = async (req, res) => {
  const wishlistItems = await Wishlist.find().populate("homeId");

  const homes = wishlistItems.map((item) => item.homeId).filter(Boolean);

  res.render("user/wishlist", {
    title: "Wishlist",
    HomeBody: homes,
  });
};

// ADD TO WISHLIST (NO userId)
exports.PostWishlist = async (req, res) => {
  const homeId = req.body.homeId;
  console.log(homeId);

  await Wishlist.findOneAndUpdate(
    { homeId },
    { homeId },
    { upsert: true, new: true }
  );

  res.redirect("/wishlist");
};

exports.RemoveWishlist = async (req, res) => {
  try {
    const homeId = new mongoose.Types.ObjectId(req.params.id);

    const result = await Wishlist.findOneAndDelete({ homeId });

    console.log("Deleted:", result); // DEBUG

    res.redirect("/wishlist");
  } catch (err) {
    console.error("Remove wishlist error:", err);
    res.redirect("/wishlist");
  }
};

// BOOKINGS
exports.GetBookings = (req, res) => {
  res.render("user/bookings", {
    title: "Bookings",
    bookings: [],
  });
};

// HOME DETAILS
exports.GetHomeDetails = async (req, res) => {
  const home = await Home.findById(req.params.id);

  if (!home) {
    return res.redirect("/");
  }

  res.render("user/homedetail", {
    title: "Home Details",
    home,
  });
};
