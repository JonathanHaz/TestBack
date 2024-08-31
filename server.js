const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/images', imageRoutes);

module.exports = app;
