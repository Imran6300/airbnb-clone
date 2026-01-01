const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // ✅ load env variables

// routes
const userRouter = require("./routes/userRoute");
const hostRouter = require("./routes/hostRoute");
const authRouter = require("./routes/authRoute");

// controllers
const { Get404 } = require("./controllers/errors");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// static files
app.use(express.static("public"));

// routes
app.use("/auth", authRouter);
app.use("/", userRouter);
app.use("/host", hostRouter);

// 404
app.use(Get404);

// env vars
const PORT = process.env.PORT || 3020;
const DB_PATH = process.env.DB_PATH;

// safety check
if (!DB_PATH) {
  console.error("❌ DB_PATH is missing in .env");
  process.exit(1);
}

// database connection
mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });
