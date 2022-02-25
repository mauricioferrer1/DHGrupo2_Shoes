/*const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {

    findUsername: (email) => {
        let userFinded = users.find (user => user.email == email);
        return userFinded;
    },
    
    login: (req, res) => {
        res.render ('users/login')
    },

    loginProcess: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let userName = req.body.username;
            let userToLogin = controller.findUsername(userName);

            if(userToLogin){
               
                let passwordMatches = bcrypt.compareSync(req.body.password, userToLogin.password)
                if (passwordMatches){
                    //delete userToLogin.password;
                    delete userToLogin.password2;
                    req.session.userlogged = userToLogin;

                    if (req.body.checkbox){

                        res.cookie('userEmail',req.body.username, { maxAge: (1000 * 60) * 2});
                    }
                    return res.redirect('/users/profile');
                }
                return res.render('users/login', {
                    error:{
                        password:{
                            msg:'Credenciales inválidas'
                        }
                    }
                })
            }

            return res.render('users/login', {
                error:{
                    username:{
                        msg:'No se encuentra este email en nuestra base de datos'
                    }
                }
            })
    } else {
        res.render('users/login', {
            errors: errors.array(),
            old:req.body
        });
    }
    },

    userProfile: (req,res) => {
        return res.render('users/profile',{
            user: req.session.userlogged
        });
    },

    register: (req,res) => {
      
         res.render('users/register')
      },

    newUser: (req,res) => {
        let email = req.body.email;
        let campos = req.body;
        let lastUser = users[users.length -1];
        campos.id = lastUser.id +1;  
        campos.image = res.req.file.filename;
        campos.password = bcrypt.hashSync(campos.password, 10);
        campos.password2 = bcrypt.hashSync(campos.password2, 10);
      
        
        let userExist = users.find (user => user.email == email)
            if (userExist) {
                res.send("Ese Email ya esta registrado " ) ;
            } else {
                users.push(campos);
                fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2), 'utf-8');
                res.render ('users/thankyouregister', {campos});
            }
      },

    logOut: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },          

    deleteUser:  (req,res) => {
        let id = req.body.id ;  
        let campos = req.body;        
        let finalUsers = users.filter (user => user.id == id);
        fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2), 'utf-8');
         res.send ('usuario' + id + 'borrado');
    }

  
}*/


    const {validationResult} = require('express-validator');
    const bcrypt = require('bcryptjs');
    const db = require('../database/models');
    const { Op } = require("sequelize");
    const sequelize = db.sequelize;


    const controller = {
    
        register: (req,res) => {
            res.render('users/register')
        },

        newUser: async (req,res) => {
            const resultValidation = validationResult(req);

            let category= req.body.category;
            let usuarioRepetido = await db.User.findOne({
                where: {
                    email: { [Op.like]: req.body.email }
                }
            })
            if (!resultValidation.errors.length && !usuarioRepetido) {
                db.User.create({
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    email:req.body.email,
                    //avatar_img = req.files[0].filename, no se porque falla
                    //password = bcrypt.hashSync(req.body.password, 10), no se porque falla
                    //password2 = bcrypt.hashSync(req.body.password2, 10)  falta crear columna en base de datos
                })

                .then(function(user){
                    req.session.userLogged = user;
                    res.render('users/login');
                })
            } else if (usuarioRepetido) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                })
            } else {
                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
        },

        login: (req, res) => {
            res.render ('users/login')
        },

        loginProcess: async (req, res) => {
            let errors = validationResult(req);
            if(errors.isEmpty()){
                let userToLogin = await db.User.findOne({
                    where: {
                        email: { [Op.like]: req.body.email }
                    }
                })
                
                if(userToLogin){
                    let email = req.body.email;
                        let passwordMatches = bcrypt.compareSync(req.body.password, userToLogin.password)
                        if (passwordMatches){
                            delete userToLogin.password;
                            //delete user.password2;
                            req.session.userlogged = userToLogin;

                            if (req.body.checkbox){
                                res.cookie('userEmail',req.body.email, { maxAge: (1000 * 60) * 2});
                            }
                            return res.redirect('/users/profile');
                        }
                        return res.render('users/login', {
                            error:{
                                password:{
                                    msg:'Credenciales inválidas'
                                }
                            }
                        })
                }
                return res.render('users/login', {
                    error:{
                        username:{
                            msg:'No se encuentra este email en nuestra base de datos'
                        }
                    }
                })
            }else{ 
            
                res.render('users/login', {
                    errors: errors.array(),
                    old:req.body
                });
            }
                
        },

        userProfile: (req,res) => {
            return res.render('users/profile',{
                user: req.session.userlogged
            });
        },

        editUser: (req, res) => {
            res.render('users/userEdit', {
                user: req.session.userLogged
            })
        },

        updateUser: (req, res) => {
            db.User.findByPk(req.session.userLogged.id)
                .then(function (user) {
                    user.update({
                        first_name:req.body.first_name,
                        last_name:req.body.last_name,
                        email:req.body.email,
                        //avatar_img = req.files[0].filename, falla
                        //password = bcrypt.hashSync(req.body.password, 10), falla
                    })
                    .then(user => {
                        req.session.userLogged = user;
                        res.redirect("/users/profile")
                    }).catch(function(e){
                        res.render('error')
                    });
                })
        },


        logOut: (req,res) => {
            res.clearCookie('userEmail');
            req.session.destroy();
            return res.redirect('/')
        }, 

        deleteUser:  (req,res) => {
            db.User.destroy({
                where: { 
                id: req.params.id
                    }
            })
            res.redirect ('/');
        }
    }  

  module.exports = controller;