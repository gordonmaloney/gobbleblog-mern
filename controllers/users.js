import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import mongoose from 'mongoose';

export const signup = async (req, res) => {
    const { email, name } = req.body;

    try {
        const existingUser = await user.findOne({email})

        if (existingUser) {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id, name: name }, 'test', {expiresIn: '1h'} )
            res.status(200).json({ result: existingUser, token });
        } else {
            const result = await user.create({ email, name })
            const token = jwt.sign({ email: result.email, id: result._id, name: name }, 'test', {expiresIn: '1h'} )
            res.status(200).json({ result, token });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong."})
    }
}





/*
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
*/