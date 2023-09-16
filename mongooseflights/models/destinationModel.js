const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  },
  arrival: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Destination', destinationSchema);
