'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FloorPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // FloorPlan belongs to an Event
      FloorPlan.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  FloorPlan.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    svgData: {
      type: DataTypes.TEXT, // Store raw SVG or JSON representation
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FloorPlan',
  });

  return FloorPlan;
};
