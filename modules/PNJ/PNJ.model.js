const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class PJN extends Model {
    static associate(models) {
      PJN.belongsToMany(models.Stuffs, { through: "posseder" });
      PJN.belongsToMany(models.Dialogues, { through: "Dire" });
    }
  }
  PJN.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Pnjs",
    }
  );
  return PJN;
};
