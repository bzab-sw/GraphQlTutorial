import { Config } from "../model/config";
import { Repo } from "./repo";

export class ConfigsDal extends Repo<Config, number> {
    public get EntityName(): string {
        return "Config";
    }

    constructor() {
        super();

        const now = new Date()
        const yesterday = new Date()
        yesterday.setDate(now.getDate() - 1)

        const twoDaysAgo = new Date()
        twoDaysAgo.setDate(now.getDate() - 2)

        this.addInternal({
            id: 1,
            nodeId: 1,
            title: "Test1",
            downloadTime: twoDaysAgo
        });

        this.addInternal({
            id: 2,
            nodeId: 2,
            title: "Test2",
            downloadTime: twoDaysAgo
        });

        this.addInternal({
            id: 3,
            nodeId: 1,
            title: "Test3",
            downloadTime: yesterday
        });

        this.addInternal({
            id: 4,
            nodeId: 2,
            title: "Test4",
            downloadTime: yesterday
        });
    }

    protected getNextId(): number {
        const ids = this.entities.map(e => e.id);
        return Math.max(...ids) + 1;
    }

    public async getFromNode(nodeId: number): Promise<Config[]> {
        return await this.mutex.runExclusive(() =>
        {
            console.log(`Getting all configs from node ID '${nodeId}'.`);
            return this.entities.filter(c => c.nodeId === nodeId);
        });
    }
}

export const configDalInstance = new ConfigsDal();