const retailerService = require('../services/retailerService');

exports.getRetailerWithSingleWholesaler = async (req, res) => {
  try {
    const data = await retailerService.getRetailerWithSingleWholesaler();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
