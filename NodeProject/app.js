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
const contractRouter = require('./routes/testContractRoute');
const creditContractRouter = require('./routes/creditContractRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/login',loginRouter);
app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/comment',commentRouter);
app.use('/strategy',strategyRouter);
app.use('/coin',coinRouter)
app.use('/contract',contractRouter);
app.use('/creditContract',creditContractRouter);

app.listen(port);

