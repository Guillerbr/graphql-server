const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');


const schema = buildSchema('
  type Query {
        user: String
    } 
');

cosnt name = "Caio";

const resolvers = {
    user: () {
        return name;
    }
};

const app = express();

app.use('/graphql', expressGraphQL({

}));
app.listen(3000);
