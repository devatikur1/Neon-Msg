import React, { createContext } from "react";
import { RecaptchaVerifier } from "firebase/auth";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  async function setUpRecaptcha(auth) {
    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear?.();
        window.recaptchaVerifier = null;
      }

      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );

      await window.recaptchaVerifier.render();
    } catch (err) {
      console.error("Recaptcha setup error:", err);
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear?.();
        } catch (e) {}
      }
      window.recaptchaVerifier = null;
    }
  }

  const value = {
    setUpRecaptcha,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
