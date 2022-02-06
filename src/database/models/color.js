module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        },
       
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config)

    Color.associate = function(models) {
        Color.belongstoMany(models.Color, {
            as: 'products',
            throuhg : "inventory",
            foreignKey: 'color_id'
        });

    Color.associate = function(models) {
        Color.hasMany(models.inventory, {
            as: 'inventory',
            foreignKey: 'color_id'
        });
    }
    }
    return Color
}
