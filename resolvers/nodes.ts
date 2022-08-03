import { nodesDalInstance } from '../dal/nodesDal';
import { Node } from '../model/node'

export default function nodes(): Node[] {
    return nodesDalInstance.getAll();
}