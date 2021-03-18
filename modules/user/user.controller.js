const db = require("../../models");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

const accessTokenSecret = "test1234";
class UserController {
  /**Register */
  register(req, res) {
    db.Users.create(req.body)
      .then((users) => {
        const mess = `Lutilisateur ${req.body.pseudo} a bien été enregistrer`;
        res.json({ mess, users });
      })
      .catch((error) => {
        const mess = `l'utilisateur n'as pas pu être créé`;
        res.status(500).json({ mess, error });
      });
    /**Login */
  }
  loggin({ body }, response) {
    db.Users.findOne({
      where: { pseudo: body.pseudo, password: body.password },
    })
      .then((data) => {
        // response.json({user : data});
        if (data != null) {
          const accessToken = jwt.sign(
            { pseudo: data.pseudo, role: data.role },
            accessTokenSecret
          );
          response.json({
            User: data,
            token: accessToken,
          });
        } else {
          response.json("NOOOOT OOOKKKK !!! HAAAAA");
        }
      })
      .catch((err) => response.json(err));
  }

  getUserById(req, res) {
    db.Users.findByPk(req.params.id)
      // {
      //   include: [{ model: db.Parties }, { model: db.Heroes }],
      // }
      .then((user) => {
        if (user == null) {
          const message = `le user n'existe pas`;
          return res.status(404).json({ message });
        } else {
          const message = `l'utilisateur ${user.pseudo} a bien été trouvé`;
          res.json({ message, data: user });
        }
      })
      .catch((error) => {
        const message = `l'user n'as pas pu être récup`;
        res.status(500).json({ message, data: error });
      });
  }
}
module.exports = new UserController();
