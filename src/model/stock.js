const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');
const Wholesaler = require('./wholesaler');
const Retailer = require('./retailer');





const Stock = sequelize.define('Stock', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  stock_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define many-to-many without enforcing a unique constraint on the join table
Wholesaler.belongsToMany(Retailer, {
  through: { model: Stock, unique: false },
  foreignKey: 'wholesaler_id'
});
Retailer.belongsToMany(Wholesaler, {
  through: { model: Stock, unique: false },
  foreignKey: 'retailer_id'
});

// Also set up direct associations if needed
Stock.belongsTo(Wholesaler, { foreignKey: 'wholesaler_id' });
Stock.belongsTo(Retailer, { foreignKey: 'retailer_id' });

module.exports = Stock;