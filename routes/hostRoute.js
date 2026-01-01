const express = require("express");
const hostRouter = express.Router();

const {
  GetHostHomeList,
  GetAddHome,
  PostAddHome,
  GetEditHome,
  PostEditHome,
  DeleteHome,
} = require("../controllers/host");

// Host homes list
hostRouter.get("/host-home-list", GetHostHomeList);

// Add home
hostRouter.get("/add-home", GetAddHome);
hostRouter.post("/add-home", PostAddHome);

// Edit home
hostRouter.get("/edit-home/:id", GetEditHome);
hostRouter.post("/edit-home", PostEditHome);
hostRouter.post("/host-home-list", DeleteHome);

module.exports = hostRouter;
