module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        Purchased_item_id: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        purchase_date: {
            type: dataTypes.DATE
        },
    };
    let config = {
        tableName: 'shopping_cart',
        timestamps: false
    };
    const Shopping_cart = sequelize.define(alias, cols, config)

    Shopping_cart.associate = function(models) {
        Shopping_cart.belongsTo(models.User, {
            as: 'user_shopping',
            foreignKey: 'user_id'
        });

        Shopping_cart.belongsTo(models.Inventory, {
            as: 'product',
            foreignKey: 'purchased_item_id'
        });
    }
    return Shopping_cart
}