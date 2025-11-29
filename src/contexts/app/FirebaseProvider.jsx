import React, { createContext, useState } from "react";
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {

  // 🔹 AuthData State
  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem("isLogged")) || false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = {
    authData: {
      isLogged,
      setIsLogged,
      user,
      setUser,
      error,
      setError,
      loading,
      setLoading,
    },
  };

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};
