const Home = require("../models/homes");

/* =========================
   GET: HOST HOME LIST
========================= */
exports.GetHostHomeList = async (req, res) => {
  try {
    const homes = await Home.find();
    res.render("host/hosthomelist", {
      title: "My Homes",
      homes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load homes");
  }
};

/* =========================
   GET: ADD HOME
========================= */
exports.GetAddHome = (req, res) => {
  res.render("host/addhomes", {
    title: "Add New Home",
    editing: false,
  });
};

/* =========================
   POST: ADD HOME
========================= */
exports.PostAddHome = async (req, res) => {
  try {
    const { title, location, imageUrl, description, price, guests, amenities } =
      req.body;

    const home = new Home({
      title,
      location,
      imageUrl,
      description: description.trim(),
      price,
      guests,
      amenities: Array.isArray(amenities) ? amenities : [amenities],
    });

    await home.save();
    res.redirect("/host/host-home-list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add home");
  }
};

/* =========================
   GET: EDIT HOME
========================= */
exports.GetEditHome = async (req, res) => {
  try {
    const homeId = req.params.id;
    const editing = req.query.editing === "true";

    const home = await Home.findById(homeId);
    if (!home) {
      return res.redirect("/host/host-home-list");
    }

    res.render("host/addhomes", {
      title: "Edit Home",
      editing,
      home,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/host/host-home-list");
  }
};

/* =========================
   POST: EDIT HOME
========================= */
exports.PostEditHome = async (req, res) => {
  try {
    const {
      homeId,
      title,
      location,
      imageUrl,
      description,
      price,
      guests,
      amenities,
    } = req.body;

    await Home.findByIdAndUpdate(homeId, {
      title,
      location,
      imageUrl,
      description,
      price,
      guests,
      amenities: Array.isArray(amenities) ? amenities : [amenities],
    });

    res.redirect("/host/host-home-list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to update home");
  }
};
