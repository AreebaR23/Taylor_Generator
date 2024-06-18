import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import tsRoutes from './routes/ts.js';
const app = express();
const PORT = 4000;

//jsonofies input
app.use(bodyParser.json());

app.use('/users', usersRoutes);
//routing + callback function

app.use('/ts', tsRoutes);

app.get('/', (req, res)=>{
    res.send("Hello from home");

})

//request listener
app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));

