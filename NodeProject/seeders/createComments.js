"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comments', [
            {
                title: "Seed 1",
                lambos: 2,
                fuds: 5,
                userId: 1,
                PostId: 1,
                createdAt: "2023-05-25T00:00:00Z",
                updatedAt: "2023-05-25T00:00:00Z"
            },
            {
                title: "Seed 2",
                lambos: 3,
                fuds: 7,
                userId: 2,
                PostId: 2,
                createdAt: "2023-05-25T00:00:00Z",
                updatedAt: "2023-05-25T00:00:00Z"
            },
            {
                title: "Seed 3",
                lambos: 1,
                fuds: 10,
                userId: 3,
                PostId: 1,
                createdAt: "2023-05-25T00:00:00Z",
                updatedAt: "2023-05-25T00:00:00Z"
            }
        ])
    }
}