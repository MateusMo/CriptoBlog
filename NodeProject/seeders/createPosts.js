"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Posts', [
            {
                id: 1,
                title: "First Post",
                content: "This is the content of the first post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                title: "Second Post",
                content: "This is the content of the second post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                title: "Third Post",
                content: "This is the content of the third post.",
                userId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                title: "Fourth Post",
                content: "This is the content of the fourth post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                title: "Fifth Post",
                content: "This is the content of the fifth post.",
                userId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                title: "Sixth Post",
                content: "This is the content of the sixth post.",
                userId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 7,
                title: "Seventh Post",
                content: "This is the content of the seventh post.",
                userId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 8,
                title: "Eighth Post",
                content: "This is the content of the eighth post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 9,
                title: "Ninth Post",
                content: "This is the content of the ninth post.",
                userId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 10,
                title: "Tenth Post",
                content: "This is the content of the tenth post.",
                userId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 11,
                title: "Eleventh Post",
                content: "This is the content of the eleventh post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 12,
                title: "Twelfth Post",
                content: "This is the content of the twelfth post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 13,
                title: "Thirteenth Post",
                content: "This is the content of the thirteenth post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 14,
                title: "Fourteenth Post",
                content: "This is the content of the fourteenth post.",
                userId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
            // Other export properties or functions...
        }
    }