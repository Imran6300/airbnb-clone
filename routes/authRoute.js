const express = require("express");
const authRouter = express.Router();

const { GetLogin, GetSignup } = require("../controllers/auth");

authRouter.get("/login", GetLogin);
authRouter.get("/signup", GetSignup);

module.exports = authRouter;
