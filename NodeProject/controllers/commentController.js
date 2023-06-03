const { where } = require('sequelize');
const { Comment } = require('../models')

const getAll = async (req, res, next) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).send({ message: comments })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comment = await Comment.getByPk(id);
        return res.status(200).send({ message: comment });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

const postComment = async (req, res, next) => {
    try {
        const { content, lambos, fuds, userId, postId } = req.body;
        const newComment = await Comment.create({
            content,
            lambos,
            fuds,
            userId,
            postId
        });
        return res.status(200).send({ message: newComment });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

const putComment = async (req, res, next) => {
    try {
        const { content, usedId, postId } = req.body;
        const { id } = req.params;
        const updatedPost = await Comment.findByIdAndUpdate(
            id, {
            content,
            },
            { new: true }
        );
        return res.status(200).send({message:updatedPost});
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedComment = await Comment.destroy({
            where: {
                id: id
            }
        })
        return res.status(204).send({ message: deleteComment });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = { getAll, getById, postComment, putComment, deleteComment }