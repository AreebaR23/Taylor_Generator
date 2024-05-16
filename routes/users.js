import express from 'express';


const router = express.Router();

const users = [
    {
    "firstname": "Bushra",
    "lastname": "Rashid",
    "age": 18
    }
]
//All routes here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send('Hello');
});

export default router;