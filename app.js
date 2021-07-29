var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');


dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const registroRouter = require('./routes/registro');
const loginRouter = require('./routes/login');
const catalogoRouter = require('./routes/catalogo');
const adminRouter = require('./routes/admin/adminIndex');
const adminUsuariosRouter = require('./routes/admin/adminUsuario');
const adminProductoRouter = require('./routes/admin/adminProducto');
const adminCategoriaRouter = require('./routes/admin/adminCategoria');
const carritoRouter = require('./routes/users/carrito');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'passwordSecreto',
  cookie:{maxAge:null},
  resave:true,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro',registroRouter);
app.use('/login',loginRouter);
app.use('/catalogo',catalogoRouter);

app.use('/users/carrito',carritoRouter);

app.use('/admin',adminRouter);
app.use('/admin/usuario',adminUsuariosRouter);
app.use('/admin/producto',adminProductoRouter);
app.use('/admin/categoria',adminCategoriaRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
