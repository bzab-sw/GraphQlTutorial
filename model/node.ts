import { Entity } from "./entity"

export enum NodeStatus {
    Unknown,
    Up,
    Down
}

export interface Node extends Entity<number> {
    name: string
    ip: string
    configTypes: string[]
    comments: string | null
    status: NodeStatus
}
