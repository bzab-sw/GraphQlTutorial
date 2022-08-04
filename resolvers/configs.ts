import { configDalInstance } from "../dal/configsDal";
import { Config } from "../model/config";

export default function configs(): Config[] {
    return configDalInstance.getAll();
}