const { User } = require('../models');

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        if (!users) {
            return res.status(400).send({ message: 'No user was found' });
        }
        return res.status(200).send({ message: users });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error });
    }
};

// Get user by ID
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).send({ message: 'No user was found' });
        }
        return res.status(200).send({ message: user });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error });
    }
};

//Create a new user
const postUser = async (req, res, next) => {
    try {
        const { wallet, nickName, asciiArt, password } = req.body;
        const createdUser = await User.create({
            wallet,
            nickName,
            asciiArt,
            password,
        });
        return res.status(201).send({ message: createdUser });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

//Delete a user
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.destroy({
            where: {
                id: id
            }
        });
        return res.status(204).send({ message: deletedUser });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

// Update an existing user
const putUser = async (req, res, next) => {
    try {
        const { wallet, nickName, asciiArt, password } = req.body;
        const userId = req.params.userId; // Assuming you have the user ID in the URL path

        // Find the user by ID and update the fields
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                wallet,
                nickName,
                asciiArt,
                password,
            },
            { new: true } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).send({ message: updatedUser });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}


module.exports = { getAllUsers, getUserById, postUser, deleteUser, putUser };
