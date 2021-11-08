"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      space.belongsTo(models.user);
      space.hasMany(models.story);
    }
  }
  space.init(
    {
      title: DataTypes.STRING,
      description: { type: DataTypes.TEXT, allowNull: false },
      userId: DataTypes.INTEGER,
      backgroundColor: { type: DataTypes.STRING, defaultValue: "#ffffff" },
      color: { type: DataTypes.STRING, defaultValue: "#000000" },
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
