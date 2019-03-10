const express = require('express');
const app = express();
const router = express.Router();

router.get('/hello345', (req, res) => {
  res.send('Hello World 2');
});

module.exports = router;