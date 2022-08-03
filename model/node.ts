import { Entity } from "./entity"

export interface Node extends Entity<number> {
    name: string
    ip: string
    configTypes: string[]
    comments: string | null
}
