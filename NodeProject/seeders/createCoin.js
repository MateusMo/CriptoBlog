"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Coins', [
            {
                coinName: "Bitcoin",
                coinSymbol: "BTC",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                coinName: "Ethereum",
                coinSymbol: "ETH",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                coinName: "Ripple",
                coinSymbol: "XRP",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        // Other export properties or functions...
    }
}