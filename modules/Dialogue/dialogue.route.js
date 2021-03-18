const express = require("express");

const DialogueController = require("./dialogue.controller");
const router = express.Router();

router.post("/createdialogue", DialogueController.createDialogue);

module.exports = router;
