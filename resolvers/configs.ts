import { configDalInstance } from "../dal/configsDal";
import { nodesDalInstance } from "../dal/nodesDal";
import { Config } from "../model/config";
import { Node } from "../model/node";

export class GqlConfigWrap {
    constructor(private config: Config) {

    }

    public get id(): number {
        return this.config.id;
    }

    public get title(): string {
        return this.config.title;
    }

    public get downloadTime(): Date {
        return this.config.downloadTime;
    }

    public get node(): Node {
        return nodesDalInstance.get(this.config.nodeId);
    }
}

export function configs(obj: any, args: any, context: any, info: any): GqlConfigWrap[] {
    const id = args.id;
    if (id != null) {
        return [new GqlConfigWrap(configDalInstance.get(Number(id)))];
    }

    return configDalInstance.getAll()
        .map(c => new GqlConfigWrap(c));
}

export function addConfig(obj: any, args: any, context: any, info: any): number {
    const entity: Config = {
        id: parseInt(args.id),
        nodeId: args.nodeId,
        downloadTime: args.downloadTime,
        title: args.title
    };

    configDalInstance.add(entity);
    return entity.id;
}