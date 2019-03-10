const express = require('express');
const app = express();

const hello = require('./routes/hello');
const hello2 = require('./routes/hello2');

const port = process.env.PORT || 8888;

app.use('/', hello);
app.use('/hello', hello2);

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});