'use strict'

const Coin = (sequelize,DataTypes) => {
    const Coin = sequelize.define('Coin',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        CoinName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CoinSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    })
    Coin.associate = (models) => {
        Coin.hasMany(models.Post,{foreignKey:'id'});
    }
}

module.exports = Coin;