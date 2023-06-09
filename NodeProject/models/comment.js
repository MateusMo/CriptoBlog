module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lambos: {
            type: DataTypes.INTEGER
        },
        fuds: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Posts',
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
    }, {})

    Comment.associate = (models) => {
        Comment.belongsTo(models.User, { foreignKey: 'id' });
        Comment.belongsTo(models.Post, { foreignKey: 'id' });
    }

    return Comment;
}

