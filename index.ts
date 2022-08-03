import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load';
import { Server } from './server';

// Load schema from the file
const schema = await loadSchema('./schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
})

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

var server = new Server(schema, root);
server.run();