import { Config } from "../model/config";
import { Repo } from "./repo";

export class ConfigsDal extends Repo<Config, number> {
    constructor() {
        super();

        const now = new Date()
        const yesterday = new Date()
        yesterday.setDate(now.getDate() - 1)

        const twoDaysAgo = new Date()
        twoDaysAgo.setDate(now.getDate() - 2)

        this.add({
            id: 1,
            nodeId: 1,
            title: "Test1",
            downloadTime: twoDaysAgo
        });

        this.add({
            id: 2,
            nodeId: 2,
            title: "Test2",
            downloadTime: twoDaysAgo
        });

        this.add({
            id: 3,
            nodeId: 1,
            title: "Test3",
            downloadTime: yesterday
        });

        this.add({
            id: 4,
            nodeId: 2,
            title: "Test4",
            downloadTime: yesterday
        });
    }

    public getFromNode(nodeId: number): Config[] {
        return this.entities.filter(c => c.nodeId === nodeId)
    }
}