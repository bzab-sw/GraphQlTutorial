import dateType from "../types/myDate";
import Query from "./query";

const resolvers = {
    Query,
    MyDate: dateType
  };

export default resolvers