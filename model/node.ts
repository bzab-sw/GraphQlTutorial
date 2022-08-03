import { Entity } from "./entity"

export enum NodeStatus {
    Unknown = "Unknown",
    Up = "Up",
    Down = "Down"
}

export interface Node extends Entity<number> {
    name: string
    ip: string
    configTypes: string[]
    comments: string | null
    status: NodeStatus
}
