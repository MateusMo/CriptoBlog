'use strict'

module.exports = (sequelize,DataTypes) => {
    const Strategy = sequelize.define('Strategy',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        coin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        buyPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        sellPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        coinId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });

    Strategy.associate = (models) => {
        Strategy.belongsTo(models.User, { foreignKey: 'id' });
        Strategy.belongsTo(models.Coin, { foreignKey: 'id' });
    }
    return Strategy;
}