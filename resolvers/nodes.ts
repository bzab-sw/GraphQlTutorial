import { GraphQLResolveInfo } from 'graphql';
import { nodesDalInstance } from '../dal/nodesDal';
import { Node } from '../model/node'

export function nodes(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<Node[]> {
    return nodesDalInstance.getAll();
}