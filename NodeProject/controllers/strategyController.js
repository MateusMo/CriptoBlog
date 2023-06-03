const { Strategy } = require('../models');

const getAll = async (req, res, next) => {
    try {
        const strategies = await Strategy.findAll();
        return res.status(200).send({ message: strategies });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const strategy = Strategy.findByPk(id);
        return res.status(200).send({ message: strategy });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

const postStrategy = async (req, res, next) => {
    try {
        const { coin, buyPrice, sellPrice, comment, userId, coinId } = req.body;
        const newStrategy = Strategy.create({
            coin,
            buyPrice,
            sellPrice,
            comment,
            userId,
            coinId
        });
        return res.status(201).send({ message: newStrategy });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

const putStrategy = async (req, res, next) => {
    try {

    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

const deleteStrategy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedStrategy = Strategy.destroy({
            where: {
                id: id
            }
        })

        return res.status(204).send({message:deletedStrategy});
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

module.exports = { getAll, getById, postStrategy, putStrategy, deleteStrategy }