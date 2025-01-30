import { createContext } from "react";
import defaultConfig from "./default";
import { Children } from "react";

const userContext=createContext(defaultConfig.user_details);

export default userContext;