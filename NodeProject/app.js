const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')

app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/post',postRouter);

app.listen(port);

