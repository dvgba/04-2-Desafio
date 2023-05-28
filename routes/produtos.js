const express = require('express');
const router = express.Router();

// -- Rota GET para a raiz do endpoint '/clientes'
router.get('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota POST para a raiz do endpoint '/clientes'
router.post('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota PUT para a raiz do endpoint '/clientes'
router.put('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
    \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota DELETE para a raiz do endpoint '/clientes'
router.delete('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

module.exports = router;
