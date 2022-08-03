import { Node, NodeStatus } from '../model/node'
import { Repo } from './repo'

export class NodesDal extends Repo<Node, number> {
    constructor() {
        super();

        this.add({
            id: 1,
            ip: "0.0.0.1",
            name: "Test1",
            configTypes: ["Running", "Startup"],
            comments: "My first test node.",
            status: NodeStatus.Up
        });

        this.add({
            id: 2,
            ip: "0.0.0.2",
            name: "Test2",
            configTypes: ["Running", "DeviceState"],
            comments: null,
            status: NodeStatus.Up
        });
    }
}