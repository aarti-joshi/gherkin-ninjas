const { Router } = require("express");
const volunteerController = require("../controllers/volunteerController");

const volunteerRouter = Router();

volunteerRouter.get("/", volunteerController.index);
volunteerRouter.get("/:volunteer_id", volunteerController.show);

module.exports = volunteerRouter;
