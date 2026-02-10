'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // A ticket belongs to a user (attendee)
      Ticket.belongsTo(models.User, { foreignKey: 'userId' });

      // A ticket belongs to an event
      Ticket.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  Ticket.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false // e.g., Early Bird, VIP
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Purchased' // Default status
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });

  return Ticket;
};
