import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import mongoose from 'mongoose';


export const signup = async (req, res) => {

    const { email, name } = req.body;
    
    try {
        const existingUser = await user.findOne({email})

        if (existingUser) {
            console.log("existing user")
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id, name: name }, 'test', {expiresIn: '1h'} )
            res.status(200).json({ result: existingUser, token });
        } else {
            console.log("new user")
            const result = await user.create({ email, name })
            const token = jwt.sign({ email: result.email, id: result._id, name: name }, 'test', {expiresIn: '1h'} )
            res.status(200).json({ result, token });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong."})
    }
}






export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await user.findOne({email})
        if (!existingUser) return res.status(404).json({message: "User doesn't exist."})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."})
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {expiresIn: '1h'} )
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong."})
    }
}



export const getUsers = async (req, res) => {
    try {
        const getUsers = await user.find();

        res.status(200).json(getUsers);
    } catch (error) {
        res.status(404).json({message: `error msg: ${error}`})
    }
}


export const getUser = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const oneUser = await user.findById(_id)

        res.status(200).json(oneUser);
    } catch (error) {
        res.status(404).json({message: `error msg: ${error}`})
    }
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    console.log(req.params.id)
    console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    
    const updatedPost = await user.findByIdAndUpdate(_id, { ...post, _id}, { new: true })

    res.json(updatedPost);
}