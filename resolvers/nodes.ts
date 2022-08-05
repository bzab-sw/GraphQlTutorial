import { GraphQLResolveInfo } from 'graphql';
import { nodesDalInstance } from '../dal/nodesDal';
import { Node } from '../model/node'

export default function nodes(obj: any, args: any, context: any, info: GraphQLResolveInfo): Node[] {
    return nodesDalInstance.getAll();
}