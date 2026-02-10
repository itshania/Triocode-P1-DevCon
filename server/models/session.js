'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A Session belongs to an Event
      Session.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  Session.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    eventId: DataTypes.INTEGER,
    speaker: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });

  return Session;
};
