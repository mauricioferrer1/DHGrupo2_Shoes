module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        user_category_id : {
            type: dataTypes.STRING
        },
        avatar_img: {
            type: dataTypes.STRING
        },
       
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    User.associate = function(models) {
        User.belongsTo(models.User_category, {
            as: 'user_category',
            foreignKey: 'user_category_id'
        });
  
        User.hasMany(models.Shopping_cart, {
                as: 'shopping_cart',
                foreignKey: 'user_id'
            });
    }
    return User
}