const Sequelize = require("sequelize");

module.export = sequelize.define("Dashboard", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});
