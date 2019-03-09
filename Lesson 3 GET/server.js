const express = require('express');
const app = express();

const port = process.env.PORT || 8888;

app.get('/process_get', (req, res) => {
  let response = {
    firstName: req.query.first_name,
    lastName: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(port, () => console.log('Server is running on port ' + port));