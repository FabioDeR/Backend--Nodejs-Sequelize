const express = require("express");
const MonsterController = require("./monster.controller");
const router = express.Router();

router.post("/createrMonster", MonsterController.createMonster);

module.exports = router;
