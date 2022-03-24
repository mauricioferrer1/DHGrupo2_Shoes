const fs = require('fs');
const { resolve } = require('path');
const path = require("path");
let db = require ("../../database/models")
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const apiUsersController = {

    list: (req, res) => {
    
        db.User.findAll()
            .then(users => {

                let usersFiltered = users.map(user => {
                    let id = user.id;
                    let fullName =  user.first_name + " " + user.last_name;
                    let email = user.email;

                    let newUser = {
                        id: id,
                        name: fullName,
                        email: email,
                        detail: `http://localhost:5000/api/users/${user.id}`
                    }

                    return newUser
                })
                
                let response = {
                    meta: {
                        status: 200,
                        count: users.length,
                        url: "/api/users"
                    },
                    users: usersFiltered
                }
                res.json(response)
            })
            .catch(err => {
                res.send(err)
            })
    
    },

    detail: (req, res) => {
    
        let id = req.params.id;

        db.User.findByPk(id)
            .then(user => {

                let newUser = {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    profile_img: `/images/users/${user.avatar_img}`
                }

                let response = {
                    meta: {
                        status: 200,
                        count: user.length,
                        url: "/api/users/:id"
                    },
                    user: newUser
                }
                res.json(response);
            })
            .catch(err => {
                res.send(err)
            })
    
    }

}

module.exports = apiUsersController;