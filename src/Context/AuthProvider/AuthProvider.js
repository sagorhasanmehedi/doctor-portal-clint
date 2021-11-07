import React, { createContext } from "react";
import Usefirebase from "../../Hook/Usefirebase";

export const mycontext = createContext();
const AuthProvider = ({ children }) => {
  const alldata = Usefirebase();

  return <mycontext.Provider value={alldata}>{children}</mycontext.Provider>;
};

export default AuthProvider;
