module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        image1: {
            type: dataTypes.STRING
        },
        image2: {
            type: dataTypes.STRING
        },
        image3: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        
    
    
        Product.belongsToMany(models.Color, {
            as: 'colors',
            through : "inventory",
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps : false
        });
    
    
        Product.belongsToMany(models.Size, {
            as: 'sizes',
            through : "inventory",
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps : false
        });
    }

    return Product
}