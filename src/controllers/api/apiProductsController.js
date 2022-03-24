const res = require('express/lib/response');
const fs = require('fs');
const { resolve } = require('path');
const path = require("path");

const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const apiProductsController = {

    list: (req, res) => {

        let productsPromise =   db.Product.findAll({ include: ["category"] })

        let productCategoriesPromise =  db.Category.findAll({ include: ["products"] })
                                
        Promise.all([productsPromise, productCategoriesPromise])
            .then(([products, categories]) => {
                //res.send(categories)
                //res.send(products) 
                //funciona ambos res.send()
               
                let arrayCategorias = [];

                categories.forEach((category) => {
                    arrayCategorias.push({
                        nombre: category.dataValues.category,
                        total: category.dataValues.products.length
                    })
                })
                //res.send(arrayCategorias) funciona

                let niño = products.filter(product => product.category_id == 1);
                let hombre = products.filter(product => product.category_id == 2);
                let mujer = products.filter(product => product.category_id == 3);

                //console.log(niño.length) funciona
                
                let productsUpdated = [];

                products.forEach(product => {
                    let newProduct = {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: product.image,
                        category_id: product.category_id,
                        category:product.category.category,
                        detail: `http://localhost:5000/detail/${product.id}`
                    }
                    productsUpdated.push(newProduct);
                })

                //res.send(productsUpdated) funciona

                let response = {
                    meta: {
                        status: 200,
                        count: products.length,
                        url: "/api/products",
                        categories: categories.length,
                        categoryNames: arrayCategorias,
                        countByCategory: {
                            niño: niño.length,
                            hombre: hombre.length,
                            mujer: mujer.length,
                        }
                    },
                    products: productsUpdated
                }
                // console.log(arrayCategorias.nombre) me tira undefined

                res.json(response);                

            })
            .catch(err => {
                res.send(err)
            }) 
    },

    detail: (req, res) => {
    
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: ["category"]
        })
            .then(product => {

                let productUpdated = {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category_id: product.category_id,
                    category: product.category.category,
                    imageURL: `/images/products/${product.image}`
                }

                let response = {
                    meta: {
                        status: 200,
                        length: product.length,
                        url: "/api/products/:id"
                    },
                    data: productUpdated
                }
                res.json(response);
            })
            .catch(err => {
                res.send(err)
            })
    
    },

    lastProduct: (req, res) => {

        db.Product.findAll({ include: ['category'], order: [ ["id", "DESC"], ], limit: 1 })
            .then(product => {
                //res.send(product) //funciona
                let productToRender=[]
                // let productUpdated = {
                //     id: product.id,
                //     name: product.name,
                //     description: product.description,
                //     price: product.price,
                //     category_id: product.category_id,
                //     category: product.category.category,
                //     image: `/images/products/${product.image}`
                // }
                product.forEach(product => {
                    let newProduct = {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: `/images/products/${product.image}`,
                        category_id: product.category_id,
                        category:product.category.category,
                    }
                    
                    productToRender.push(newProduct)
                })

                // res.send(productToRender) funciona

                let response = {
                    meta: {
                        status: 200,
                        length: product.length,
                        url: "/api/lastproduct"
                    },
                    data: productToRender[0]
                }
                res.json(response);

            })
            .catch(err => {
                res.send(err)
        })

    } 

}

module.exports = apiProductsController;
