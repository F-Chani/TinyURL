import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import UsersRouter from './Routers/UsersRouter.js';
import LinksRouter from './Routers/LinksRouter.js'; 
import connectDB from './dataBase.js';

connectDB();
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/users', UsersRouter);
app.use('/links', LinksRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
