const express = require('express');
const app = express();

const port = 8888;

app.get('/', (req, res) => {
  req.accepts('text/html');
  let contentType = req.get('Content-Type');
  let name = req.param('name');
  let name2= req.query;
  res.send(req.protocol);
});

app.listen(port, () => console.log('Server is running on port ' + port));