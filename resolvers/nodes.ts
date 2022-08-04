import { nodesDalInstance } from '../dal/nodesDal';
import { Node } from '../model/node'

export default function nodes(obj: any, args: any, context: any, info: any): Node[] {
    return nodesDalInstance.getAll();
}