const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, Datatypes) {
  class Inventaire extends Model {
    static associate(models) {
      Inventaire.hasMany(models.Heroes);
      Inventaire.belongsTo(models.Loots);
      Inventaire.belongsTo(models.Stuffs);
    }
  }
  Inventaire.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poids: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Inventaires",
    }
  );
  return Inventaire;
};
