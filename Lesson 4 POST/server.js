const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extended: false});
const port = process.env.PORT || 8888;

// app.get('/process_post', (req, res) => {
//   let response = {
//     firstName: req.query.firstname,
//     lastName: req.query.lastname
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

app.post('/process_post', urlencodeParser, (req, res) => {
  let response = {
    firstName: req.body.firstname,
    lastName: req.body.lastname
  };
  if (response.firstName === "Hello" && response.lastName === "World") {
    console.log("Login Success");
    res.end(JSON.stringify(response));
  } else {
    console.log("Login Failed");
    res.end('Please check your username or password');
  }
  console.log(response);
});

app.listen(port, () => console.log('Server is running on port ' + port));