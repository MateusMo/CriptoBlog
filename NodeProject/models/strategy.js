'use strict'

const Srategy = (sequelize,DataTypes) => {
    sequelize.define('Strategy',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Coin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        BuyPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        SellPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Comment: {
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
}