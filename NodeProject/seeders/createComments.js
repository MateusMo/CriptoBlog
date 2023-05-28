"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comment', [
            {
                content: "Seed 1",
                lambos: 2,
                fuds: 5,
                userId: 1,
                PostId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: "Seed 2",
                lambos: 3,
                fuds: 7,
                userId: 2,
                PostId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: "Seed 3",
                lambos: 1,
                fuds: 10,
                userId: 3,
                PostId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    }
}