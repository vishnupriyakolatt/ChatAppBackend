const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const User = require('../Model/userModel');
const generateToken=require('../config/generateToken.js')

const RegisterUser = asyncHandler(async (req, res) => {
    const { name, email, password,pic} = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExist = await User.findOne({ email }); 
    if (userExist) {
        res.status(400);
        throw new Error("User already exists"); 
    }

    const user = await User.create({
        name,
        email,
        password,
        pic 
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id) 
        });
    } else {
        res.status(400);
        throw new Error("Failed to create user");
    }
});

const Authuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid Email or Password');
    }
});


module.exports = { RegisterUser,Authuser };
