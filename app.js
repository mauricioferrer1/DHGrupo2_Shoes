const express = require("express");
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Permitiendo capturar informacion a traves de un post

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Definicion de routers 
const indexRouter = require('./src/routes/index');
const detailRouter = require('./src/routes/detail');
const cartRouter = require('./src/routes/cart');
const loginRouter = require('./src/routes/login');
const registerRouter = require('./src/routes/register');
const indexProducts  = require('./src/routes/products');
const newProduct  = require('./src/routes/newProduct');

//uso de routers
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/detail', detailRouter);
app.use('/shoppingcart', cartRouter);
app.use('/users/login', loginRouter)
app.use('/users/register', registerRouter)
app.use('/products', indexProducts)
app.use('/products/createproduct',newProduct);

// Definicion de puerto y a la escucha
let port = 3000;

app.listen(port, ()=>{
    console.log('Servidor funcionando en puerto ' + port);
});

module.exports = app;
