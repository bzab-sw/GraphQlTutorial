import { IResolvers } from "@graphql-tools/utils";
import dateType from "../types/myDate";
import Mutation from "./mutation";
import Query from "./query";

const resolvers: IResolvers = {
    Query,
    Mutation,
    MyDate: dateType
  };

export default resolvers