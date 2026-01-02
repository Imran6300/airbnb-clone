const Home = require("../models/homes");
const Wishlist = require("../models/wishlist");
const Booking = require("../models/bookings");
const mongoose = require("mongoose");

// ================= HOME =================
exports.GetHome = async (req, res) => {
  const homes = await Home.find();
  res.render("user/homes", {
    title: "Home Page",
    homes,
  });
};

// ================= WISHLIST =================
exports.GetWishlist = async (req, res) => {
  const wishlistItems = await Wishlist.find().populate("homeId");
  const homes = wishlistItems.map((i) => i.homeId).filter(Boolean);

  res.render("user/wishlist", {
    title: "Wishlist",
    HomeBody: homes,
  });
};

exports.PostWishlist = async (req, res) => {
  const homeId = req.body.homeId;

  await Wishlist.findOneAndUpdate({ homeId }, { homeId }, { upsert: true });

  res.redirect("/wishlist");
};

exports.RemoveWishlist = async (req, res) => {
  try {
    const homeId = new mongoose.Types.ObjectId(req.params.id);
    await Wishlist.findOneAndDelete({ homeId });
    res.redirect("/wishlist");
  } catch (err) {
    console.error(err);
    res.redirect("/wishlist");
  }
};

// ================= BOOKINGS =================

// ✅ GET BOOKINGS (PASS REAL BOOKING DOCS)
exports.GetBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("homeId");

    res.render("user/bookings", {
      title: "Your Bookings",
      bookings,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
};

// ✅ ADD BOOKING (NO DUPLICATES)
exports.PostBookings = async (req, res) => {
  try {
    const homeId = req.body.homeId;

    const exists = await Booking.findOne({ homeId });
    if (exists) return res.redirect("/bookings");

    await Booking.create({ homeId });
    res.redirect("/bookings");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
};

// ✅ CANCEL BOOKING (CORRECT ID)
exports.RemoveBookings = async (req, res) => {
  try {
    const bookingId = req.body.bookingId;
    await Booking.findByIdAndDelete(bookingId);
    res.redirect("/bookings");
  } catch (err) {
    console.error(err);
    res.redirect("/bookings");
  }
};

// ================= HOME DETAILS =================
exports.GetHomeDetails = async (req, res) => {
  const home = await Home.findById(req.params.id);
  if (!home) return res.redirect("/");

  res.render("user/homedetail", {
    title: "Home Details",
    home,
  });
};
