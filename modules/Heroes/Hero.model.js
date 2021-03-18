const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Hero extends Model {
    static associate(models) {
      Hero.hasMany(models.Parties);
      Hero.belongsTo(models.Inventaires);
    }
  }
  Hero.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PointDevie: {
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
      Arme: {
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
      modelName: "Heroes",
    }
  );
  return Hero;
};
