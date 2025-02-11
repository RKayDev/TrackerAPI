import express from 'express';
import userRouter from './routers/user.router.js';
import taskRouter from './routers/task.router.js';

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.json());

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
