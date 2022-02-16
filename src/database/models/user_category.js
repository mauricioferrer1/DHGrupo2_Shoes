module.exports = (sequelize, dataTypes) => {
    let alias = 'User_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_category: {
            type: dataTypes.STRING
        },
       
    };
    let config = {
        tableName: 'user_category',
        timestamps: false
    };
    const User_category = sequelize.define(alias, cols, config)

    User_category.associate = function(models) {
        User_category.hasMany(models.user, {
            as: 'users',
            foreignKey: 'user_category_id'
        });
    }
    return User_category
}