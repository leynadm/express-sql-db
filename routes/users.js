const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);

usersRouter.get("/new", usersController.createNewUser);

usersRouter.post("/new", usersController.saveNewUser);

module.exports = usersRouter;
