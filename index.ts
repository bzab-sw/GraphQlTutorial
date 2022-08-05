import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { applyDirectives } from './directives/applyDirectives';
import resolvers from './resolvers/resolvers';
import { Server } from './server';

// Load schema from the file
const schema = await loadSchema('./schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
});
const schemaWithResolversAndDirectives = applyDirectives(schema);

var server = new Server(schemaWithResolversAndDirectives);
server.run();