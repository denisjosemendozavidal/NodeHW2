const express = require('express');

const userRouter = require('./tasks/users.router')

const port = 9000; //http://localhost:9000/users

const app = express();

app.use(express.json());

app.use('/', userRouter) 

app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
})