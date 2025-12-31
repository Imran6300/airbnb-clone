const Home = require("../models/homes");

module.exports.GetHostHomeList = (req, res) => {
  Home.find()
    .then((homes) => {
      res.render("host/hosthomelist", {
        title: "Host Home List",
        homes: homes,
      });
    })
    .catch((err) => {
      console.error("Error fetching homes:", err);
      res.status(500).send("Failed to retrieve homes");
    });
};

module.exports.GetAddHome = (req, res) => {
  res.render("host/addhomes", { title: "Add New Home" });
};

module.exports.PostAddHome = async (req, res) => {
  try {
    const { title, location, imageUrl, description, price, guests, amenities } =
      req.body;

    let amenitiesArray = [];

    if (typeof amenities === "string") {
      amenitiesArray = amenities.split(",").map((item) => item.trim());
    } else if (Array.isArray(amenities)) {
      amenitiesArray = amenities.map((item) => item.trim());
    }

    const newHome = new Home({
      title,
      location,
      imageUrl,
      description: description.trim(),
      price,
      guests,
      amenities: amenitiesArray,
    });

    await newHome.save();

    res.redirect("/host/host-home-list");
  } catch (err) {
    console.error("Error adding new home:", err);
    res.status(500).send("Failed to add home");
  }
};
