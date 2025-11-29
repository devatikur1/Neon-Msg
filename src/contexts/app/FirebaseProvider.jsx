import React, { createContext, useContext } from "react";
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const value = {};

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};
