import { IResolvers } from "@graphql-tools/utils";
import dateType from "../types/myDate";
import Query from "./query";

const resolvers: IResolvers = {
    Query,
    MyDate: dateType
  };

export default resolvers