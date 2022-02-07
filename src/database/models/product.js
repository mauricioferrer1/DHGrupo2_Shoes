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
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        
    
    
        Product.belongsToMany(models.color, {
            as: 'colors',
            throuhg : "inventory",
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps : false
        });
    
    
        Product.belongsToMany(models.size, {
            as: 'sizes',
            throuhg : "inventory",
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps : false
        });
    }

    return Product
}