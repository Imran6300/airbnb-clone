const express = require("express");
//mongoose
const mongoose = require("mongoose");
const DB_Path =
  "mongodb+srv://Root1234:Root1234@airbnb.q6sfnix.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Airbnb";

//routes
const userRouter = require("./routes/userRoute");
const hostRouter = require("./routes/hostRoute");
const authRouter = require("./routes/authRoute");
//controllers
const { Get404 } = require("./controllers/errors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine setup
app.set("view engine", "ejs");
app.set("views", "views");

//static files
app.use(express.static("public"));

//routes middleware
app.use("/auth", authRouter);
app.use("/", userRouter);
app.use("/host", hostRouter);

app.use(Get404);

const PORT = 3020;
mongoose
  .connect(DB_Path)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });
