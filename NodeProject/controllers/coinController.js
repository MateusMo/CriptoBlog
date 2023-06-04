const { Coin } = require('../models');

const getAll = async (req, res) => {
    try {
        const coins = await Coin.findAll();
        res.json(coins);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const coin = await Coin.findByPk(id);
        if (coin) {
            res.json(coin);
        } else {
            res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }

}
const updateCoin = async (req, res) => {
    const { id } = req.params;
    const { coinName, coinSymbol } = req.body;
    try {
        const coin = await Coin.findByPk(id);
        if (coin) {
            coin.coinName = coinName;
            coin.coinSymbol = coinSymbol;
            await coin.save();
            res.json(coin);
        } else {
            res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const postCoin = async (req, res) => {
    const { coinName, coinSymbol } = req.body;
    try {
        const coin = await Coin.create({ coinName, coinSymbol });
        res.status(201).json(coin);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteCoin = async (req, res) => {
    const { id } = req.params;
    try {
        const coin = await Coin.findByPk(id);
        if (coin) {
            await coin.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {getAll,getById,updateCoin,postCoin,deleteCoin};