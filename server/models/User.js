const Sequelize = require("sequelize");

module.export = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  email: {
    type: DataTypes.TEXT,
    unique: true,
  },
  hashedPassword: {
    type: DataTypes.STRING(64),
    is: /^[0-9a-f]{64}$/i
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});
