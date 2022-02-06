module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            category: dataTypes.STRING
        },
        description: {
            category: dataTypes.STRING
        },
        image: {
            category: dataTypes.STRING
        },
        image1: {
            category: dataTypes.STRING
        },
        image2: {
            category: dataTypes.STRING
        },
        image3: {
            category: dataTypes.STRING
        },
        category_id: {
            category: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.hasMany(models.Color, {
            as: 'colors',
            throuhg : "inventory",
            foreignKey: 'color_id'
        });

        Product.hasMany(models.Size, {
            as: 'sizes',
            throuhg : "inventory",
            foreignKey: 'size_id'
        });
    }
    return Product
}