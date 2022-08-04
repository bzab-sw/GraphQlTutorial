import configs from "./configs";
import configsOfNode from "./configsOfNode";
import nodes from "./nodes";

// The root provides a resolver function for each API endpoint
const Query = {
    nodes,
    configs,
    configsOfNode
  };

export default Query