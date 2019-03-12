const express = require('express');
const app = express();

const port = process.env.PORT || 8888;

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});