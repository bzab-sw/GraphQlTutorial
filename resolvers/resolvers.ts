import { IResolvers } from "@graphql-tools/utils";
import { Mutation } from "./mutation";
import { Query } from "./query";

export const resolvers: IResolvers = {
  Query,
  Mutation
};
