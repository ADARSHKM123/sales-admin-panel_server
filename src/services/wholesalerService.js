const Wholesaler = require('../model/wholesaler');
const Retailer = require('../model/retailer');
const Stock = require('../model/stock');
const { Op, Sequelize } = require('sequelize');

exports.getWholesalerWithRetailers = async (id) => {
  // Fetch wholesaler along with its associated retailers (via Stock table)
  const wholesaler = await Wholesaler.findByPk(id, {
    include: [{
      model: Retailer,
      through: { attributes: [] } // Exclude join table attributes
    }]
  });
  return wholesaler;
};

exports.getMonthlyTurnover = async () => {
  // Aggregate monthly turnover per wholesaler for the year 2021
  const turnovers = await Stock.findAll({
    attributes: [
      'wholesaler_id',
      [Sequelize.fn('DATE_TRUNC', 'month', Sequelize.col('date')), 'month'],
      [Sequelize.fn('SUM', Sequelize.col('stock_amount')), 'total_turnover']
    ],
    where: {
      date: {
        [Op.between]: [new Date('2021-01-01'), new Date('2021-12-31')]
      }
    },
    group: ['wholesaler_id', Sequelize.fn('DATE_TRUNC', 'month', Sequelize.col('date'))],
    order: ['wholesaler_id', [Sequelize.fn('DATE_TRUNC', 'month', Sequelize.col('date'))]]
  });
  return turnovers;
};

exports.getMaxTurnoverPerRetailer = async () => {
  // Sum stock amounts grouped by wholesaler and retailer,
  // then for each wholesaler, pick the maximum turnover from a single retailer.
  const turnoverPerRetailer = await Stock.findAll({
    attributes: [
      'wholesaler_id',
      'retailer_id',
      [Sequelize.fn('SUM', Sequelize.col('stock_amount')), 'total_turnover']
    ],
    group: ['wholesaler_id', 'retailer_id']
  });

  const result = {};
  turnoverPerRetailer.forEach(record => {
    const wholesalerId = record.wholesaler_id;
    const turnover = parseFloat(record.get('total_turnover'));
    if (!result[wholesalerId] || turnover > result[wholesalerId].maxTurnover) {
      result[wholesalerId] = {
        wholesaler_id: wholesalerId,
        retailer_id: record.retailer_id,
        maxTurnover: turnover
      };
    }
  });

  return Object.values(result);
};
