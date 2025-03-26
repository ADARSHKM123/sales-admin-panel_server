const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');



const Wholesaler = sequelize.define('Wholesaler', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
  });
  
  module.exports = Wholesaler;