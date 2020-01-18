const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
const { startApolloServer } = require('./apolloServer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// middleware for route
app.use('/', router);

// listening on port
app.listen(process.env.port, () => {
    console.log(`FIFA Score Keeper API Running at ${process.env.port}`)
    console.log(`Environment: ${process.env.ENV} `)
    startApolloServer();
});
