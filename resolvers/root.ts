import configs from "./configs";
import nodes from "./nodes";

// The root provides a resolver function for each API endpoint
const root = {
    nodes,
    configs
  };

export default root