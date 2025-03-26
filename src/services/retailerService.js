const Retailer = require('../model/retailer');
const Stock = require('../model/stock');
const { Sequelize } = require('sequelize');

exports.getRetailerWithSingleWholesaler = async () => {

  const results = await Stock.findAll({
    attributes: [
      'retailer_id',
      [Sequelize.fn('COUNT', Sequelize.fn('DISTINCT', Sequelize.col('wholesaler_id'))), 'wholesalerCount']
    ],
    group: ['retailer_id'],
    having: Sequelize.where(Sequelize.fn('COUNT', Sequelize.fn('DISTINCT', Sequelize.col('wholesaler_id'))), '=', 1)
  });

  const retailerIds = results.map(r => r.retailer_id);
  const retailers = await Retailer.findAll({
    where: {
      id: retailerIds
    }
  });
  return retailers;
};
