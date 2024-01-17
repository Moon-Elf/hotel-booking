const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const roomRouter = require("./routes/roomRouter");
const facilityRouter = require("./routes/facilityRouter");
const roomTypeRouter = require("./routes/roomTypeRouter");
const userRouter = require("./routes/userRouter");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/room", roomRouter);
app.use("/api/facility", facilityRouter);
app.use("/api/roomType", roomTypeRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to HOTel");
});

module.exports = app;
