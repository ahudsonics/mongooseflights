const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

router.get('/', flightsController.index);
router.get('/new', flightsController.newFlight);
router.get('/:id', flightsController.show);

module.exports = router;

