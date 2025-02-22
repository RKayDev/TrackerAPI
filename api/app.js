import express from 'express';
import userRouter from './routers/user.router.js';
import taskRouter from './routers/task.router.js';
import cors from 'cors';

const app = express();
const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174',
    optionsSuccessStatus: 200
},{origin: 'http://49.207.195.4:5174',
    optionsSuccessStatus: 200}))
app.use('/user', userRouter);
app.use('/task', taskRouter);

app.use('/', (req, res) => {
    res.send('I gotcha nose!!');
}
);

app.listen(port, hostname, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server is running on http://${hostname}:${port}`);
    }
})
