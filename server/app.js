const express = require("express");
const cors = require("cors");
const communityRouter = require("./routers/communityRouter");
const volunteerRouter = require("./routers/volunteerRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/CommunityAsync", communityRouter);
app.use("/Volunteers", volunteerRouter);

app.get("/", (req, res) => {
  res.send("this is a resident's API");
});

module.exports = app;
