const db = require("./models");
const express = require("express");
const bodyParser = require("body-parser");

const { UserRouter } = require("./modules/user");
const { StuffRouter } = require("./modules/Stuff/main");
const { PnjRouter } = require("./modules/PNJ/main");
const { DialogueRouter } = require("./modules/Dialogue/main");
const cors = require("cors");
const { MonsterRouter } = require("./modules/Monster");
const { LootRouter } = require("./modules/Loot");

const app = express();
const port = 8080;

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello express"));

app.use("/users", UserRouter);
app.use("/stuff", StuffRouter);
app.use("/pnj", PnjRouter);
app.use("/dialogue", DialogueRouter);
app.use("/monsters", MonsterRouter);
app.use("/loots", LootRouter);

db.sequelize.sync().then(() => console.log("database synchronisée"));
app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! L'url ne doit pas être correct";
  res.status(404).json({ message });
});

app.listen(port, () =>
  console.log(`l'application a démarré sur : http://localhost:${port}`)
);
