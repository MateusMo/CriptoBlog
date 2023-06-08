const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API',
            version: '1.0.0',
        },
    },
    apis: [
        './routes/coinRouter.js',
        './routes/commentRoute.js',
        './routes/contractRoute.js',
        './routes/login.js',
        './routes/postRoute.js',
        './routes/strategyRoute.js',
        './routes/userRoute.js',
    ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
