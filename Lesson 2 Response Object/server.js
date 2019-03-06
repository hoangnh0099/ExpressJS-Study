const express = require('express');
const app = express();

const port = 8888;

app.get('/', (req, res) => {
  res.cookie('sample', 'test run cookie');
  res.json({
    name: 'test',
    age: 18
  });
  res.redirect('http://facebook.com/hoangnh0099');
  res.end();
});

app.listen(port, () => console.log('Server is running on port ' + port));