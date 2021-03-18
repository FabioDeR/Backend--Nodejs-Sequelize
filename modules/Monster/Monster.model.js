const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Monster extends Model {
    static asscociate(models) {
      Monster.hasMany(models.Parties);
      Monster.belongsToMany(models.Loots, { through: "tenir" });
    }
  }
  Monster.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PointDeVie: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Attaque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Monsters",
    }
  );
  return Monster;
};
