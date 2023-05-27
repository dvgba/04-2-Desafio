const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

// -- Exibir configuração
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Captura 404 e encaminhar para o manipulação de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// -- Manipulação de erros
app.use(function(err, req, res, next) {
  // -- Define locais, fornecendo apenas erros no desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // -- Renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
