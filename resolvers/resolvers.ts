import { IResolvers } from "@graphql-tools/utils";
import myDateType from "../types/myDate";
import Mutation from "./mutation";
import Query from "./query";

const resolvers: IResolvers = {
    Query,
    Mutation,
    MyDate: myDateType
  };

export default resolvers