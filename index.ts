import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import Query from './resolvers/query';
import { Server } from './server';

// Load schema from the file
const schema = await loadSchema('./schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = {
  Query
};

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
})

var server = new Server(schemaWithResolvers);
server.run();