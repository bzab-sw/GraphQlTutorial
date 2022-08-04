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

export function configs(): GqlConfigWrap[] {
    return configDalInstance.getAll()
        .map(c => new GqlConfigWrap(c));
}

export function configsOfNode(obj: any, args: any, context: any, info: any): GqlConfigWrap[] {
    const nodeId = Number(args.nodeId);
    return configDalInstance.getFromNode(nodeId)
        .map(c => new GqlConfigWrap(c));
}