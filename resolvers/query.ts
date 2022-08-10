import { configs } from "./configs";
import { nodes}  from "./nodes";

// The root provides a resolver function for each API endpoint
const Query = {
    nodes,
    configs
  };

export default Query