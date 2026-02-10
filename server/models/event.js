'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Event belongs to organizer (User)
      Event.belongsTo(models.User, { foreignKey: 'organizerId', as: 'organizer' });

      // Event has many sessions
      Event.hasMany(models.Session, { foreignKey: 'eventId', as: 'sessions' });

      // Event has many tickets
      Event.hasMany(models.Ticket, { foreignKey: 'eventId', as: 'tickets' });

      // Event has many floor plans
      Event.hasMany(models.FloorPlan, { foreignKey: 'eventId', as: 'floorPlans' });
    }
  }

  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      organizerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'Events'
    }
  );

  return Event;
};
