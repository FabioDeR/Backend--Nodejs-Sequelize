const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Parties);
    }
  }

  User.init(
    {
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return User;
};
