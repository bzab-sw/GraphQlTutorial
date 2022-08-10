import { GraphQLResolveInfo } from "graphql";
import { configDalInstance } from "../dal/configsDal";
import { nodesDalInstance } from "../dal/nodesDal";
import { Config } from "../model/config";
import { Node } from "../model/node";

export class GqlConfigWrap {
    constructor(private config: Config) {

    }

    public get id(): number {
        return Number(this.config.id);
    }

    public get title(): string {
        return this.config.title;
    }

    public get downloadTime(): Date {
        return this.config.downloadTime;
    }

    public get node(): Promise<Node> {
        return nodesDalInstance.get(this.config.nodeId);
    }
}

export async function configs(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<GqlConfigWrap[]> {
    const id = args.id;
    if (id != null) {
        const config = await configDalInstance.get(Number(id));
        return [new GqlConfigWrap(config)];
    }

    const all = await configDalInstance.getAll();
    return all.map(c => new GqlConfigWrap(c));
}

export function addConfig(obj: any, args: any, context: any, info: GraphQLResolveInfo): Promise<number> {
    const entity: Config = {
        nodeId: args.nodeId,
        downloadTime: args.downloadTime,
        title: args.title
    };

    return configDalInstance.addWithIncrement(entity);
}