const express = require("express");
const PnjController = require("./pnj.controller");
const router = express.Router();

router.post("/createPnj", PnjController.createPnj);
router.get("/:id", PnjController.getPnjById);
// router.put("/updatePnj/:id", PnjController.updatePnj);

module.exports = router;
