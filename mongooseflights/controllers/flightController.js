const Flight = require('../models/flightModel');

// Controller functions for flights

const index = (req, res) => {
  Flight.find({}, (err, flights) => {
    if (err) console.log(err);
    res.render('flights/index', { flights });
  });
};

const newFlight = (req, res) => {
  const defaultDate = new Date();
  defaultDate.setFullYear(defaultDate.getFullYear() + 1);

  const newFlight = new Flight({
    departs: defaultDate
  });
  const departsDate = newFlight.departs.toISOString().slice(0, 16);

  res.render('flights/new', { departsDate });
};

module.exports = {
  index,
  newFlight
};
