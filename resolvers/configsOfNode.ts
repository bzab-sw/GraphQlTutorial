import { configDalInstance } from "../dal/configsDal";
import { Config } from "../model/config";

export default function configsOfNode(obj: any, args: any, context: any, info: any): Config[] {
    const nodeId = Number(args.nodeId)
    return configDalInstance.getFromNode(nodeId)
}