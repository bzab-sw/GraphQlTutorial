import { IResolvers } from "@graphql-tools/utils";
import Mutation from "./mutation";
import Query from "./query";

const resolvers: IResolvers = {
    Query,
    Mutation
  };

export default resolvers