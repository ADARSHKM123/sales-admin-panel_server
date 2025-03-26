const wholesalerService = require('../services/wholesalerService');

exports.getWholesalerWithRetailers = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await wholesalerService.getWholesalerWithRetailers(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMonthlyTurnover = async (req, res) => {
  try {
    const data = await wholesalerService.getMonthlyTurnover();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMaxTurnoverPerRetailer = async (req, res) => {
  try {
    const data = await wholesalerService.getMaxTurnoverPerRetailer();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
