const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const sequelize = new Sequelize('wholesaler', `${process.env.db_username}`, `${process.env.db_password}`, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});


module.exports = sequelize;              
 



