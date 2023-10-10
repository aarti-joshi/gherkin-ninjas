const express = require("express");
const cors = require("cors");

const logRoutes = require("./middleware/logger");
const communityRouter = require("./routers/communityRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes);

app.use("/CommunityAsync", communityRouter);

app.get("/", (req, res) => {
  res.send("this is a resident's API");
});

module.exports = app;