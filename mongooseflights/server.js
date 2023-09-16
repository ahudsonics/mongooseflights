const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/database');

const app = express();

// Connect to the database
mongoose.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware and routing setup
app.use(express.json());
app.use('/flights', require('./routes/flights'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});