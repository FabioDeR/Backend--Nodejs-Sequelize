const express = require("express");
const StuffController = require("./stuff.controller");
const router = express.Router();

router.post("/createStuff", StuffController.createStuffForgeron);
router.get("/:id", StuffController.getStuffById);

module.exports = router;
