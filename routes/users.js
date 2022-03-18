import express from 'express';

import { signin, signup, getUsers, getUser, updateUser } from '../controllers/users.js'

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/allusers', getUsers)
router.get('/allusers/:id', getUser)
router.patch('/allusers/:id', updateUser)

export default router;