const express = require('express');
const wholesalerController = require('../controllers/wholesalerController');
const router = express.Router();


router.get('/:id', wholesalerController.getWholesalerWithRetailers);

router.get('/turnover/monthly', wholesalerController.getMonthlyTurnover);

router.get('/turnover/max', wholesalerController.getMaxTurnoverPerRetailer);

module.exports = router;
