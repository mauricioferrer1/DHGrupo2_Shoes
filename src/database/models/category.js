module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            category: dataTypes.STRING
        },
       
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models) {
        Category.hasMany(models.product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    }

    return Category
}