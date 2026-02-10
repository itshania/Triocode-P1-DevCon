'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load all models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Run associate methods if defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// ----- Explicit Associations -----
db.User.hasMany(db.Event, { foreignKey: 'organizerId' });
db.User.hasMany(db.Ticket, { foreignKey: 'userId' });

db.Event.belongsTo(db.User, { foreignKey: 'organizerId' });
db.Event.hasMany(db.Ticket, { foreignKey: 'eventId' });
db.Event.hasMany(db.FloorPlan, { foreignKey: 'eventId' });

db.Ticket.belongsTo(db.User, { foreignKey: 'userId' });
db.Ticket.belongsTo(db.Event, { foreignKey: 'eventId' });

db.FloorPlan.belongsTo(db.Event, { foreignKey: 'eventId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

