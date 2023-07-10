const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const PORT = process.env.PORT || 5050;
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/record", records);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});