const express = require("express");
const LootController = require("./loot.controller");
const router = express.Router();

router.post("/createloot", LootController.createLoot);

module.exports = router;
