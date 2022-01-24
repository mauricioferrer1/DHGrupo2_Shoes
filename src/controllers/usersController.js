const fs = require('fs');
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

  
  };
  
  module.exports = controller;