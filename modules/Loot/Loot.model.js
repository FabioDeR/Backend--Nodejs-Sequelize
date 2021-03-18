const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Loot extends Model {
    static associate(models) {
      Loot.hasMany(models.Inventaires);
    }
  }
  Loot.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poids: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Loots",
    }
  );
  return Loot;
};
