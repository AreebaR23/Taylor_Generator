import express from 'express';
import { createUsers, getUsers, deleteUser, findUser, updateUser } from '../controllers/users.js';

const router = express.Router();

//All routes here are starting with /users
router.get('/', getUsers);

router.post('/', createUsers);

// /users/2 => req.params { id: 2} finds users by id
router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;