const show = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    if (err) console.log(err);
    res.render('flights/show', { flight });
  });
};

module.exports = {
  index,
  newFlight,
  show
};
