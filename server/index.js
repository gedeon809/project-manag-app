const express = require('express');
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const schema = require('./schema/schema');

const app = express();
//connecting my database
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
