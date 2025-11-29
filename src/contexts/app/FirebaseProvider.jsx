import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";
import GetAuthData from "./functions/GetAuthData";
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  // 🔹 AuthData State
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Check User Is Logged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsLogged(false);
        return;
      }
      const udata = await GetAuthData({
        documentID: user.uid,
      });
      console.log(udata);
    });

    return () => unsubscribe();
  }, []);

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

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
