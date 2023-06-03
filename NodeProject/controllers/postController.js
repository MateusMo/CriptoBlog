'use strict'
const { Post } = require('../models')

const getAll = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).send({ message: posts })
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) { return res.status(404).send({ message: "No post was found" }); }
        return res.status(200).send({ message: post });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

const postPost = async (req, res, next) => {
    try {
        const { title, content, userId, coinId } = req.body;
        const post = Post.create({
            title,
            content,
            userId,
            coinId
        })
        return res.status(201).send({ message: "The post was created" })
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}
// Update an existing post
const putPost = async (req, res, next) => {
    try {
        const { title, content, userId, coinId } = req.body;
        const postId = req.params.postId;

        // Find the post by ID and update the fields
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
                title,
                content,
                userId,
                coinId,
            },
            { new: true } // Return the updated post
        );

        if (!updatedPost) {
            return res.status(404).send({ message: 'Post not found' });
        }

        return res.status(200).send({ message: 'The post was updated', post: updatedPost });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

// Delete a post
const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // Find the post by ID and delete it
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).send({ message: 'Post not found' });
        }

        return res.status(200).send({ message: 'The post was deleted' });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}


module.exports = { getAll, getById, postPost, putPost, deletePost }