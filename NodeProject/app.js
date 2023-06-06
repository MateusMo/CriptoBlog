const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login')
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const commentRouter = require('./routes/commentRoute');
const strategyRouter = require('./routes/strategyRoute');
const coinRouter = require('./routes/strategyRoute');
const contractRouter = require('./routes/contractRoute');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');

//console.log('JWT Secret Key:', secretKey);

app.use(bodyParser.json());
app.use('/login',loginRouter);
app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/comment',commentRouter);
app.use('/strategy',strategyRouter);
app.use('/coin',coinRouter)
app.use('/contract',contractRouter);

app.listen(port);

