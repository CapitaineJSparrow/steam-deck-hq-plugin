import React from "react";
import {HQResult} from "./types";

export const GlobalContext = React.createContext({
  setData: (_d: HQResult[]) => {},
  data: undefined as HQResult[] | undefined
});
