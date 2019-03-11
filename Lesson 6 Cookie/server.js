const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8888;

app.use(cookieParser());

app.get('/cookie', (req, res) => {
  res.cookie('cookieName', 'Cookie Demo');
  res.send('Cookie is set');
  console.log(req.cookies);
});
app.get('/', (req, res) => {
  console.log('Cookie: ' + req.cookies);
  res.send('Hello');
});

app.listen(port, () => console.log('Server is running on port + ' + port));