import React, { useContext, useEffect, useState } from "react";
import GenUsername from "../contexts/app/functions/GenUsername";
import AuthHeader from "../components/AuthCom/AuthHeader";
import AuthMain from "../components/AuthCom/AuthMain";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../contexts/auth/firebaseConfig";
import { SetDataUseingDoc } from "../contexts/app/functions/SetDataUseingDoc";
import { FirebaseContext } from "../contexts/app/FirebaseProvider";

export default function AuthPage() {
  // 🔹 Firebase Auth Data & Context
  const { authData } = useContext(FirebaseContext);

  const { isLogged, setIsLogged, setUser } = authData;

  // 🔹 Get Window Height
  const [width, height] = useWindowSize();

  // 🔹 Loading
  const [isLoginging, setIsLoginging] = useState(false);

  // 🔹 Error
  const [error, setError] = useState("");

  // 🔹 Google Provider
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // 🔹 useEffect
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  /* ✅ Google Login */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoginging(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // 🔹 user data
      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        username: GenUsername(user.displayName),
      };

      // 🔹 set data in firestore
      const isSetUserData = await SetDataUseingDoc({
        documentID: user.uid,
        data: userData,
      });

      const isSetUserName = await SetDataUseingDoc({
        coll: "userNames",
        documentID: userData.username,
        data: {
          id: user.uid,
        },
      });

      // 🔹 set data in local storage
      if (isSetUserData.status && isSetUserName.status) {
        localStorage.setItem("isLogged", JSON.stringify(true));
        localStorage.setItem("user", JSON.stringify(isSetUserData.data));
        setIsLogged(true);
        setUser(isSetUserData.data);
        setError("");
      } else {
        localStorage.setItem("isLogged", JSON.stringify(false));
        localStorage.setItem("user", JSON.stringify({}));
        setIsLogged(false);
        setUser({});
        setError(isSetUserData.error || isSetUserName.error);
      }
    } catch (error) {
      console.error("Google login error:", error);
      localStorage.setItem("isLogged", JSON.stringify(false));
      localStorage.setItem("user", JSON.stringify({}));
      setIsLogged(false);
      setUser({});
      setError(error.message);
    } finally {
      setIsLoginging(false);
    }
  };

  //🔹 props
  const prop = {
    size: {
      width,
      height,
    },
    others: {
      isLoginging,
      error,
    },
    fn: {
      handleLogin,
    },
  };

  return (
    <div>
      <AuthHeader />
      <AuthMain prop={prop} />
    </div>
  );
}
