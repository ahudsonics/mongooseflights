const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adhudsond:WroQGBFl11ZC6ZnS@cluster0.8n1kphs.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;