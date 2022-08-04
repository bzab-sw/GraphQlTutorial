import { configDalInstance } from "../dal/configsDal";
import { nodesDalInstance } from "../dal/nodesDal";
import { Config } from "../model/config";
import { Node } from "../model/node";

class GqlConfigWrap {
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

export default function configs(): GqlConfigWrap[] {
    return configDalInstance.getAll()
        .map(c => new GqlConfigWrap(c));
}