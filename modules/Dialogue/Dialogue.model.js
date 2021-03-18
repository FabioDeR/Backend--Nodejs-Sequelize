const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Dialogue extends Model {
    static assciote(models) {
      Dialogue.belongsToMany(models.Pnjs, { through: "Dire" });
    }
  }
  Dialogue.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Dialogues",
    }
  );
  return Dialogue;
};
