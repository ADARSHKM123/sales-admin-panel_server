const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');


const Retailer = sequelize.define('Retailer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
  });
  
  module.exports = Retailer;
  