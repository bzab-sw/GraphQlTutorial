import { Node, NodeStatus } from '../model/node'
import { Repo } from './repo'

export class NodesDal extends Repo<Node, number> {
    public get EntityName(): string {
        return "Node";
    }

    constructor() {
        super();

        this.addInternal({
            id: 1,
            ip: "0.0.0.1",
            name: "Test1",
            configTypes: ["Running", "Startup"],
            comments: "My first test node.",
            status: NodeStatus.Up
        });

        this.addInternal({
            id: 2,
            ip: "0.0.0.2",
            name: "Test2",
            configTypes: ["Running", "DeviceState"],
            status: NodeStatus.Down
        });
    }

    protected getNextId(): number {
        const ids = this.entities.map(e => e.id);
        return Math.max(...ids) + 1;
    }
}

export const nodesDalInstance = new NodesDal();