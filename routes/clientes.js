const express = require('express');
const router = express.Router();

// -- Rota GET para o caminho '/'
// -- res.send - Retorna uma mensagem com
// -- informações sobre o endpoint,
// -- método e queries da requisição
router.get('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota POST para o caminho '/'
// -- res.send - Retorna uma mensagem com
// -- informações sobre o endpoint,
// -- método e queries da requisição
router.post('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota PUT para o caminho '/'
// -- res.send - Retorna uma mensagem com
// -- informações sobre o endpoint,
// -- método e queries da requisição
router.put('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

// -- Rota DELETE para o caminho '/'
// -- res.send - Retorna uma mensagem com
// -- informações sobre o endpoint,
// -- método e queries da requisição
router.delete('/', function(req, res) {
  res.send(`Endpoint: ${req.originalUrl}\nMethod: ${req.method}
  \nQueries: ${JSON.stringify(req.query)}`);
});

module.exports = router;
