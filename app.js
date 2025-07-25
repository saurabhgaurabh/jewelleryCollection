const express = require('express');
const approutes = express();
const router = require('./routes/routes');
const cors = require('cors');

approutes.use(cors());
approutes.use(express.json());
approutes.use('/api', router);


module.exports = approutes;
