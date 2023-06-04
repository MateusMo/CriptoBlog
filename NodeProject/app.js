const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const commentRouter = require('./routes/commentRoute');
const strategyRouter = require('./routes/strategyRoute');
const coinRouter = require('./routes/strategyRoute');


app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/comment',commentRouter);
app.use('/strategy',strategyRouter);
app.use('/coin',coinRouter)

app.listen(port);

