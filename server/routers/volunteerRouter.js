const { Router } = require("express");
const volunteerController = require("../controllers/volunteerController");

const volunteerRouter = Router();

volunteerRouter.get("/", volunteerController.index);
volunteerRouter.get("/:volunteer_id", volunteerController.show);
volunteerRouter.post("/", volunteerController.create);
volunteerRouter.post("/register", volunteerController.register);
volunteerRouter.post("/login", volunteerController.login);
volunteerRouter.patch("/:volunteer_id", volunteerController.update);
volunteerRouter.delete("/:volunteer_id", volunteerController.destroy);

module.exports = volunteerRouter;
