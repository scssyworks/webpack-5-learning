const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (_, res) => {
  res.send(
    fs.readFileSync(path.resolve(__dirname, '../dist/kiwi.html'), 'utf-8')
  );
});

app.listen(4001, () => {
  console.log('Hello World app is running on http://localhost:4001');
});
