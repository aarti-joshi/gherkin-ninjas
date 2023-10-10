const { Router } = require("express");
const historyController = require("../controllers/historyController");

const historyRouter = Router();

historyRouter.get("/", historyController.index);
historyRouter.get("/:history_id", historyController.show);
historyRouter.post("/", historyController.create);
historyRouter.patch("/:history_id", historyController.update);
historyRouter.delete("/:history_id", historyController.destroy);

module.exports = historyRouter;
