import { GraphQLResolveInfo } from 'graphql';
import { configDalInstance } from '../dal/configsDal';
import { nodesDalInstance } from '../dal/nodesDal';
import { Node, NodeStatus } from '../model/node'
import { GqlConfigWrap } from './configs';

export class GqlNodeWrap {
    constructor(private node: Node) {

    }

    public get id(): number {
        return this.node.id!;
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

    public async configs(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<GqlConfigWrap[]> {
        const all = await configDalInstance.getFromNode(this.id);
        return all.map(c => new GqlConfigWrap(c))
    }
}

export async function nodes(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<GqlNodeWrap[]> {
    const id = args.id;
    if (id != null) {
        const node = await nodesDalInstance.get(Number(id));
        return [new GqlNodeWrap(node)];
    }

    const all = await nodesDalInstance.getAll();
    return all.map(n => new GqlNodeWrap(n));
}

export async function addNode(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<GqlNodeWrap> {
    const nodeInput = args.node;

    const entity: Node = {
        configTypes: nodeInput.configTypes,
        name: nodeInput.name,
        ip: nodeInput.ip,
        status: NodeStatus.Unknown
    };

    const id = await nodesDalInstance.addWithIncrement(entity);
    entity.id = id;
    return new GqlNodeWrap(entity);
}