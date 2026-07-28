'use strict';

const express = require('express');
const usersRouter = require('./routes/users.route');
const expensesRouter = require('./routes/expenses.route');

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  app.use((req, res, next) => {
    res.sendStatus(404);
  });

  return app;
};

module.exports = {
  createServer,
};
