const db = require("../../models");

class Loot {
  createLoot(req, res) {
    db.Loots.create({
      type: req.body.type,
      poids: req.body.poids,
      gold: req.body.gold,
    })
      .then((loot) => {
        const message = "ok";
        res.json({ message, loot });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = new Loot();
