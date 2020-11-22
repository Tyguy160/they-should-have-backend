const { connect } = require('./utils/db');
const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { router } = require('./resources/card/card.router');

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/card', router);

const port = 4000;

const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Listening to https://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { app, start };
