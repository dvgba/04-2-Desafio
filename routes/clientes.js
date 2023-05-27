const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

router.post('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

router.put('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

router.delete('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

module.exports = router;
