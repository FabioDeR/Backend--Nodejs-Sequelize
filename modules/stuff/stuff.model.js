const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Stuff extends Model {
    static associate(models) {
      Stuff.hasMany(models.Inventaires);
      // Stuff.hasMany(models.Pnjs);
    }
  }
  Stuff.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attaque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
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
      modelName: "Stuffs",
    }
  );
  return Stuff;
};
