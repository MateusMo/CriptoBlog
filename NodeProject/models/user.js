'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        wallet: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
            }
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
            }
        },
        asciiArt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 45]
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
    }, {});

    User.associate = (models) => {
        User.hasMany(models.Post, { foreignKey: 'UserId' });
        User.hasMany(models.Strategy, { foreignKey: 'UserId' });
        User.hasMany(models.Comment, { foreignKey: 'UserId' });
    };

    return User;
};
