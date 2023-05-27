const express = require('express');
const router = express.router();

/* GET listagem de usuários. */
router.get('/', function(req, res, next) {
  res.send('responder com alguma coisa');
});

module.exports = router;
