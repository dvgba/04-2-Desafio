const express = require('express');
const router = express.Router();

// --  GET home page.
// --  Renderiza a página 'index' com o título 'Exercicio Express'
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Exercicio Express'});
});

module.exports = router;
