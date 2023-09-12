const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/', flightController.index);
router.get('/new', flightController.new);
router.post('/', flightController.create);

module.exports = router;