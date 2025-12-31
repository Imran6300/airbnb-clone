const express = require("express");
const hostRouter = express.Router();

const {
  GetHostHomeList,
  GetAddHome,
  PostAddHome,
} = require("../controllers/host");

hostRouter.get("/host-home-list", GetHostHomeList);

// Route to render the Add Home page
hostRouter.get("/add-home", GetAddHome);
// Route to handle the Add Home form submission
hostRouter.post("/add-home", PostAddHome);

module.exports = hostRouter;
