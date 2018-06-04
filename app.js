const express = require('express');
const middlewares = require('./routes/middlewares');

const heroesRouter = require('./routes/heroes');

const app = express();
app.use(...middlewares.global);

// routes
app.use('/api/heroes', heroesRouter);

module.exports = app;
