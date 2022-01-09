const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')





const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {

    login: (req, res) => {
        res.render ('users/login')
    },

    loginProcess: (req, res) => {
        res.send (req.body)
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
                    if (userExist) 
                    {
                      
                        res.send("Ese Email ya esta registrado " ) ;
                    }
                    else
                    {
                       users.push(campos);
                       fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2), 'utf-8');
                       res.render ('users/thankyouregister', {campos});
                   }
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