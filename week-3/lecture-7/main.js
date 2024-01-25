const express = require('express');
const app = express();

let count = 42;

app.get('/', (req, res) => {
  count++;
  res.send(`
  <h1>Hello World</h1>
  ${count}
  `);
});

app.listen(4242, () => {
  console.log('Server is running on port 4242');
});
