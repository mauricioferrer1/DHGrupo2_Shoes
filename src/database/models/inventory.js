module.exports = (sequelize, dataTypes) => {
    let alias = 'Inventory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            category: dataTypes.INTEGER
        },
        color_id: {
            category: dataTypes.INTEGER
        },
        size_id: {
            category: dataTypes.INTEGER
        },
        stock: {
            category: dataTypes.INTEGER
        },
        price: {
            category: dataTypes.INTEGER
        }
        
    };
    let config = {
        tableName: 'inventory',
        timestamps: false
    };
    const Inventory = sequelize.define(alias, cols, config)

    
    Inventory.associate = function(models) {
        User.hasMany(models.shopping_cart, {
            as: 'shopping_cart',
            foreignKey: 'purchased_item_id'
        });
    }
    return Inventory
}