const express = require("express");
const UserController = require("./user.controller");
const router = express.Router();

router.post("/create", UserController.register);
router.post("/login", UserController.loggin);
router.get("/:id([0-9]+)", UserController.getUserById);

module.exports = router;
