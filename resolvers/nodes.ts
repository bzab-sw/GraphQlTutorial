import { configDalInstance } from '../dal/configsDal';
import { nodesDalInstance } from '../dal/nodesDal';
import { Node } from '../model/node'
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

export function nodes(obj: any, args: any, context: any, info: any): GqlNodeWrap[] {
    return nodesDalInstance.getAll()
        .map(n => new GqlNodeWrap(n));
}