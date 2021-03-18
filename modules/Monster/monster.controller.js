const db = require("../../models");

class MonsterController {
  createMonster(req, res) {
    db.Monsters.create({
      nom: req.body.nom,
      PointDeVie: req.body.PointDeVie,
      Attaque: req.body.Attaque,
      Defense: req.body.Defense,
      img: req.body.img,
    })
      .then((monster) => {
        req.body.Loot.forEach((element) => {
          monster.setLoots(element);
        });
        const message = "ok";
        res.json({ message, data: monster });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new MonsterController();
