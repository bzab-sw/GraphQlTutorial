import { GraphQLSchema } from "graphql";
import { userAgentAuthorizeDirectiveHandler } from "./userAgentAuthorize";

export type DirectiveHandler = (schema: GraphQLSchema) => GraphQLSchema; 

const handlers: DirectiveHandler[] = [
    userAgentAuthorizeDirectiveHandler
];

export function applyDirectives(schema: GraphQLSchema): GraphQLSchema {
    let fixed = schema;

    for (const handler of handlers) {
        fixed = handler(fixed);
    }

    return fixed;
}