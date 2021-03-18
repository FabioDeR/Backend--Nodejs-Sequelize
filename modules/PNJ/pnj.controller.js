const { Pnjs } = require("../../models");
const db = require("../../models");

class PnjController {
  createPnj(req, res) {
    db.Pnjs.create({
      nom: req.body.nom,
      img: req.body.img,
    })
      .then((pnj) => {
        req.body.Stuff.forEach((element) => {
          pnj.setStuffs(element);
        });
        req.body.Dialogue.forEach((element) => {
          pnj.setDialogues(element);
        });
        const message = `pnj a bien été`;
        res.json({ message, pnj });
      })

      .catch((error) => {
        console.log(error);
      });
  }
  getPnjById({ params: { id } }, res) {
    db.Pnjs.findByPk(id, {
      include: [
        { model: db.Stuffs },
        { model: db.Dialogues, attributes: ["text"] },
      ],
    })
      .then((pnj) => {
        const mess = "trouver";
        res.json({ mess, pnj });
      })
      .catch((error) => {
        res.json(error);
      });
  }
  // updatePnj(req, res) {
  //   const id = req.params.id;
  //   db.Pnjs.update({
  //     nom: req.body.nom,
  //     img: req.body.img,
  //   })
  //     .then((pnj) => {
  //       console.log(pnj);
  //     })
  //     .then((_) => {
  //       return Pnjs.findByPk(id)
  //         .then((pnj) => {
  //           if (pnj === null) {
  //             const message = `le pnj a modifié n'existe pas`;
  //             return res.status(404).json({ message });
  //           }
  //           const message = `le pnj ${pnj.nom} a bien été modifié`;
  //           res.json({ message, pnj });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     });
  // }
}

module.exports = new PnjController();
