import { GraphQLResolveInfo } from 'graphql';
import { configDalInstance } from '../dal/configsDal';
import { nodesDalInstance } from '../dal/nodesDal';
import { Node, NodeStatus } from '../model/node'
import { GqlConfigWrap } from './configs';

export class GqlNodeWrap {
    constructor(private node: Node) {

    }

    public get id(): number {
        return this.node.id
    }

    public get name(): string {
        return this.node.name
    }

    public get ip(): string {
        return this.node.ip
    }

    public get configTypes(): string[] {
        return this.node.configTypes
    }

    public get comments(): string | undefined {
        return this.node.comments
    }

    public get status(): string {
        return this.node.status
    }

    public get configs(): GqlConfigWrap[] {
        return configDalInstance.getFromNode(this.id)
            .map(c => new GqlConfigWrap(c))
    }
}

export function nodes(obj: any, args: any, context: any, info: GraphQLResolveInfo): GqlNodeWrap[] {
    const id = args.id;
    if (id != null) {
        return [new GqlNodeWrap(nodesDalInstance.get(Number(id)))];
    }

    return nodesDalInstance.getAll()
        .map(n => new GqlNodeWrap(n));
}

export function addNode(obj: any, args: any, context: any, info: GraphQLResolveInfo): GqlNodeWrap {
    const nodeInput = args.node;

    const entity: Node = {
        configTypes: nodeInput.configTypes,
        id: parseInt(nodeInput.id),
        name: nodeInput.name,
        ip: nodeInput.ip,
        status: NodeStatus.Unknown
    };

    nodesDalInstance.add(entity);
    const node = nodesDalInstance.get(entity.id);
    return new GqlNodeWrap(node);
}