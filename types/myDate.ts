import { GraphQLScalarType } from "graphql";

const myDateType = new GraphQLScalarType({
    name: 'MyDate',
    description: 'My custom date scalar',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return new Date(Number(value));
    },
    parseLiteral(ast) {
      if (ast.kind === "IntValue") {
        return new Date(ast.value);
      }
      if (ast.kind === "StringValue") {
        return new Date(ast.value);
      }
      return null;
    }
});

export default myDateType
