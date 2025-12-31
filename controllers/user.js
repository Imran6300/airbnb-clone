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

//show home details
module.exports.GetHomeDetails = (req, res) => {
  const homeId = req.params.id;
  Home.findById(homeId).then((home) => {
    res.render("user/homedetail", { title: "Home Details", home: home });
  });
};
