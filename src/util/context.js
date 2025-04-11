import { createContext } from "react";
import defaultConfig from "./default";

const userContext = createContext({
    user: {
      ...defaultConfig.user_details
    },
    setUser: () => {}
  });
export default userContext;