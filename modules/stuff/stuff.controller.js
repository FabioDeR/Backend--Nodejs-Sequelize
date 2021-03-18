const express = require("express");
const { Stuffs } = require("../../models");
const db = require("../../models");

class Stuff {
  createStuffForgeron(req, res) {
    db.Stuffs.create({
      nom: req.body.nom,
      img: req.body.img,
      attaque: req.body.attaque,
      defense: req.body.defense,
      poids: req.body.poids,
      gold: req.body.nom,
    })
      .then((stuff) => {
        const message = `l'ingrédients ${req.body.nom} a bien été créé`;
        res.json({ message, stuff });
      })
      .catch((error) => {
        console.log(error);
        const message = `le stuff n'as pas pu être créé`;
        res.status(400).json({ message, data: error });
      });
  }
  getStuffById({ params: { id } }, res) {
    db.Stuffs.findByPk(id)
      .then((stuff) => {
        const message = "ok";
        res.json({ message, stuff });
      })
      .catch((error) => {
        const message = `no ok !`;
        res.json({ message, error });
      });
  }
}

module.exports = new Stuff();
