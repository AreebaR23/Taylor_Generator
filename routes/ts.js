//API endpoint for taylor swift requests
import express from 'express';
import { getSongs, createSong, findSong, getLyrics} from '../controllers/ts.js';

const router = express.Router();

//All routes here are starting with /users
router.get('/', getSongs);

router.post('/', createSong);

// /users/2 => req.params { id: 2} finds users by id
router.get('/:id', findSong);

router.delete('/:id', getLyrics);

export default router;