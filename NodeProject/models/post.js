'use strict'

const Post = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
        },
        coinId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
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
    },{})

    Post.associate = (models) => {
        Post.belongsTo(models.User, { foreignKey: 'id' });
        Post.belongsTo(models.Coin, { foreignKey: 'id' });
    };

    return Post;
}

module.exports = Post;