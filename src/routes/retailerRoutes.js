const express = require('express');
const retailerController = require('../controllers/retailerController');
const router = express.Router();


router.get('/single-wholesaler', retailerController.getRetailerWithSingleWholesaler);

module.exports = router;
         