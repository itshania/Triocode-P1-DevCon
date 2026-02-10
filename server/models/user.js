'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // One User can organize many Events
      User.hasMany(models.Event, { foreignKey: 'organizerId' });

      // One User can have many Tickets
      User.hasMany(models.Ticket, { foreignKey: 'userId' });
    }
  }

  User.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, defaultValue: 'Attendee' } // Super Admin, Organizer, Staff, Attendee
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
