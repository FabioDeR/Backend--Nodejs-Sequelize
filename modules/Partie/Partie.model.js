const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Partie extends Model {
    static associate(models) {
      Partie.belongsTo(models.Users);
      Partie.belongsTo(models.Heroes);
      Partie.belongsTo(models.Monsters);
      Partie.belongsTo(models.Pnjs);
    }
  }
  Partie.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Parties",
    }
  );
  return Partie;
};
