import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
import { GraphQLSchema } from "graphql";

export const agentAuthorizeDirectiveName = "userAgentAuthorize";

export function userAgentAuthorizeDirectiveHandler(schema: GraphQLSchema): GraphQLSchema {
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            const directive = getDirective(schema, fieldConfig, agentAuthorizeDirectiveName)?.[0];
            if (directive) {
                const baseResolve = fieldConfig.resolve;
                fieldConfig.resolve = (obj, args, context, info) => {
                    checkUserAgent(directive.userAgent, context);
                    if (baseResolve) {
                        return baseResolve(obj, args, context, info);
                    }
                }
            }
            return fieldConfig;
        }
    });
}

function checkUserAgent(userAgent: string, context: any) {
    const header = context.headers["user-agent"];
    if (header) {
        const currentUserAgent = String(header);
        if (!currentUserAgent.includes(userAgent)) {
            throw new Error(`Expected user-agent to have '${userAgent}' but got '${currentUserAgent}'.`);
        }
        console.log(`The user-agent '${currentUserAgent}' matches '${userAgent}'.`);
    } else {
        throw new Error("The user-agent header is not defined.");
    }
}