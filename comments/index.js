const express = require('express');
const bodyParser = require('body-parser');

const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

app.listen(4001, () => {
  console.log('Listening on port 4001');
});