const Sequelize = require("sequelize");

// 'use strict';
//
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};
//
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
//
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;
const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  email: {
    type: Sequelize.DataTypes.TEXT,
    unique: true,
  },
  hashedPassword: {
    type: Sequelize.DataTypes.STRING(64),
    is: /^[0-9a-f]{64}$/i
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

const Dashboard = sequelize.define("Dashboard", {
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

const User_Dashboard = sequelize.define("User_Dashboard", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: 'users'
      },
      key: 'id'
    },
    allowNull: false
  },
  DashboardId: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: 'dashboards'
      },
      key: 'id'
    },
    allowNull: false
  }
});

Dashboard.belongsToMany(User, {through: 'User_Dashboards'});
User.belongsToMany(Dashboard, {through: 'User_Dashbaords'});
