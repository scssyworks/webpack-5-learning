const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req, res) {
  const pathToIndex = path.resolve(__dirname, '../dist/index.html');
  const contentFromFile = fs.readFileSync(pathToIndex, 'utf-8');
  res.send(contentFromFile);
});

app.listen(4000, function () {
  console.log('Application running at http://localhost:4000');
});
