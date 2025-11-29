import React, { useEffect, useRef, useState } from "react";
import AuthHeader from "../components/AuthCom/AuthHeader";
import AuthMain from "../components/AuthCom/AuthMain";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../contexts/auth/firebaseConfig";

function genUsername(name = "") {
  const num = Math.floor(Math.random() * 1000);
  const str = Math.random().toString(36).substring(2, 7); // 5-letter random string
  return name ? name.replace(/\s+/g, "").toLowerCase() + str + num : str + num;
}

export default function AuthPage() {
  // 🔹 Get Window Height
  const [width, height] = useWindowSize();

  // 🔹 Loading
  const [isLoginging, setIsLoginging] = useState(false);

  // 🔹 Error
  const [error, setError] = useState("");

  // 🔹 Google Provider
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  /* ✅ Google Login */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoginging(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      let userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        username: genUsername(user.displayName),
      };
      console.log(userData);
      
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
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
