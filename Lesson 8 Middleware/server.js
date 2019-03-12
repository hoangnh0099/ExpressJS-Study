const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});
app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome');
});
app.get('/help', (req, res) => {
  res.send('How can i help you ?');
});

let server = app.listen(8888, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server is running on port ' + port);
});