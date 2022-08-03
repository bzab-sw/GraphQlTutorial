import { ConfigsDal } from "../dal/configsDal";
import { Config } from "../model/config";

export default function configs(): Config[] {
    const dal = new ConfigsDal();
    return dal.getAll();
}