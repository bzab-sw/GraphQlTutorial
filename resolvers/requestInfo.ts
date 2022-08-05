import { GraphQLResolveInfo } from "graphql"

export interface RequestInfo {
    host?: string
    method?: string
    headers?: Header[]
}

export interface Header {
    key: string
    value: string
}

export function requestInfo(obj: any, args: any, context: any, info: GraphQLResolveInfo): RequestInfo {
    const reqHeaders = context.headers;
    const keys = Object.getOwnPropertyNames(reqHeaders);
    const headers: Header[] = [];

    for (let key of keys) {
        headers.push({
            key: key,
            value: reqHeaders[key]
        });
    } 

    return {
        host: context.hostname,
        method: context.method,
        headers: headers
    };
}