const express = require("express");
const session = require('express-session');
const cookies = require ('cookie-parser');
const path = require('path');
const app = express();
const methodOverride = require('method-override')
const userLoggedMiddleware = require('./middlewares/userloggedmiddleware');


//seteo session
app.use(session({
    secret:'grupo 2 shoe company',
    resave: false,
    saveUninitialized: false,
}));

//seteo cookies
app.use(cookies());

// middleware aplicacion 
app.use(userLoggedMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//Definicion carpeta public

app.use(express.static(path.join(__dirname, 'public')));

//Permitiendo capturar informacion a traves de un post

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Definicion de routers Productos
const indexRouter = require('./src/routes/index');
const detailRouter = require('./src/routes/detail');
const cartRouter = require('./src/routes/cart');
const indexProducts  = require('./src/routes/products');
const newProduct  = require('./src/routes/newProduct');
const editProduct  = require('./src/routes/editProduct');
const deleteProduct  = require('./src/routes/deleteProduct');
const { profile } = require("console");

//Definicion de routers Users
const loginRouter = require('./src/routes/login');
const registerRouter = require('./src/routes/register');
const profileRouter = require('./src/routes/userProfile');
const logOutRouter = require('./src/routes/logout');
const editUserRouter = require('./src/routes/editProfile');
const deleteUserRouter = require('./src/routes/deleteProfile');

//Definicion de router de Api
const apiRouter = require("./src/routes/apiRouter")

//uso de router de Api
app.use("/api", apiRouter)

//uso de routers Product
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/home', indexRouter);
app.use('/detail', detailRouter);
app.use('/shoppingcart', cartRouter);
app.use('/products', indexProducts)
app.use('/products/createproduct',newProduct);
app.use(methodOverride('_method'));
app.use('/product',editProduct);
app.use('/eliminar/',deleteProduct);

//uso de routers User
app.use('/users/login', loginRouter)
app.use('/users/register', registerRouter)
app.use('/users/profile',profileRouter);
app.use('/logout', logOutRouter);
app.use('/users/edit', editUserRouter);
app.use('/users/delete', deleteUserRouter);

//error 404

app.use((req,res,next) => {
    res.status('404').render('not-found')
});

// Definicion de puerto y a la escucha
let port = 5000;

app.listen(port, ()=>{
    console.log('Servidor funcionando en puerto http://localhost:' + port);
});

module.exports = app;
