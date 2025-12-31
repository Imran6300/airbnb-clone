const Home = require("../models/homes");

module.exports.GetHome = (req, res) => {
  Home.find().then((homes) => {
    res.render("user/homes", { title: "Home Page", homes: homes });
  });
};

module.exports.GetWishlist = (req, res) => {
  res.render("user/wishlist", { title: "Wishlist", HomeBody: null });
};

module.exports.GetBookings = (req, res) => {
  res.render("user/bookings", {
    title: "Bookings",
    bookings: null,
  });
};
