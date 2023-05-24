'use strict'

const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        wallet: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
            }
        },
        nickName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
            }
        },
        asciiArt: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
            },
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {});

    User.associate = (models) => {
        //User.hasMany(models.Post,{foreignKey:'userId'});
    }
}