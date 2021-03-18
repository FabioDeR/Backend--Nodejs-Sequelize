const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

const db = {};
// let sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: path.join(__dirname, "..", "db", "db.sqlite3"),
// });
const sequelize = new Sequelize("dbrpg", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

db["Users"] = require("../modules/user/User.model")(sequelize, DataTypes);
db["Parties"] = require("../modules/Partie/Partie.model")(sequelize, DataTypes);
db["Heroes"] = require("../modules/Heroes/Hero.model")(sequelize, DataTypes);
db["Monsters"] = require("../modules/Monster/Monster.model")(
  sequelize,
  DataTypes
);
db["Pnjs"] = require("../modules/PNJ/PNJ.model")(sequelize, DataTypes);
db["Loots"] = require("../modules/Loot/Loot.model")(sequelize, DataTypes);
db["Stuffs"] = require("../modules/stuff/stuff.model")(sequelize, DataTypes);
db["Dialogues"] = require("../modules/Dialogue/Dialogue.model")(
  sequelize,
  DataTypes
);
db["Inventaires"] = require("../modules/Inventaire/Inventaire.model")(
  sequelize,
  DataTypes
);

Object.keys(db).forEach((model) => {
  console.log(model);
  if (db[model].associate) {
    db[model].associate(db);
  }
});

db["sequelize"] = sequelize;
db["Sequelize"] = Sequelize;

module.exports = db;
