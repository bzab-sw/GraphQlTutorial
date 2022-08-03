import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load';
import root from './resolvers/root';
import { Server } from './server';

// Load schema from the file
const schema = await loadSchema('./schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
})

var server = new Server(schema, root);
server.run();