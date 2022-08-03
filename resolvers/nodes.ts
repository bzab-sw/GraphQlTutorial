import { NodesDal } from '../dal/nodesDal'
import { Node } from '../model/node'

export default function nodes(): Node[] {
    const dal = new NodesDal();
    return dal.getAll();
}