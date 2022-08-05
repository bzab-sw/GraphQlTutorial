import { configs } from "./configs";
import { nodes}  from "./nodes";
import { requestInfo } from "./requestInfo";

// The root provides a resolver function for each API endpoint
const Query = {
    nodes,
    configs,
    requestInfo
  };

export default Query