const { Dialogues } = require("../../models");
const db = require("../../models");

class DialogueController {
  createDialogue(req, res) {
    db.Dialogues.create({
      text: req.body.text,
    })
      .then((dialogue) => {
        res.json({ dialogue });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new DialogueController();
