import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load';

// Load schema from the file
const schema = await loadSchema('./schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
})

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');