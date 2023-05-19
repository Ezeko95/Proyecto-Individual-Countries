const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Winter", "Spring", "Autumn"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
