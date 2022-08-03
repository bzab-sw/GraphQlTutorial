import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";

export class Server {
    constructor(private schema: GraphQLSchema) {

    }

    public run() {
        var app = express();
        app.use('/graphql', graphqlHTTP({
            schema: this.schema,
            graphiql: true,
        }));
        app.listen(4000);
        console.log('Running a GraphQL API server at http://localhost:4000/graphql');
    }
}