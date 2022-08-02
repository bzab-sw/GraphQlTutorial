import { Entity } from "./entity";

export interface Config extends Entity<number> {
    nodeId: number,
    title: string,
    downloadTime: Date
}