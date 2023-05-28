"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Strategy', [
            {
                comment: "This is a great coin!",
                coin: "Bitcoin",
                buyPrice: 50000.00,
                sellPrice: 55000.00,
                userId: 1,
                coinId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                comment: "Ethereum is the future!",
                coin: "Ethereum",
                buyPrice: 3000.00,
                sellPrice: 3500.00,
                userId: 1,
                coinId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                comment: "I'm hodling Ripple!",
                coin: "Ripple",
                buyPrice: 1.00,
                sellPrice: 1.20,
                userId: 2,
                coinId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        // Other export properties or functions...
    }
}