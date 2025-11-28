import React, { useEffect, useState } from "react";
import AuthHeader from "../components/AuthCom/AuthHeader";
import AuthMain from "../components/AuthCom/AuthMain";
import { useWindowSize } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../contexts/auth/firebaseConfig";

export default function AuthPage() {
  // 🔹 Get Window Height
  const [width, height] = useWindowSize();

  // 🔹 Set And Get Opt and data system
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSenting, setIsOtpSenting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // 🔹 Value
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+88");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  // 🔹 Error
  const [error, setError] = useState("");

  // 🔹 Recapca Verify
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  // 🔹 Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsOtpSenting(true);

    console.log(phoneNumber);
    console.log(name);

    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});

      const confirmmation = signInWithPhoneNumber(auth, phoneNumber, recaptcha);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Verify OTP
  async function verifyOTP(e) {
    e.preventDefault();
    setIsVerifying(true);
    try {
      if (!window.confirmationResult) {
        setError("Dose not OTP send");
        return;
      }

      // Verify OTP
      const result = await window.confirmationResult.confirm(otp);
      const user = result.user;

      // Clear recaptcha
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
      window.confirmationResult = null;
      navigate("/");
    } catch (err) {
      console.log({ error: err.message });
      setError(err.message);
    } finally {
      setIsVerifying(false);
    }
  }

  useEffect(() => {
    console.log(confirmationResult);
  }, []);

  const prop = {
    size: {
      width,
      height,
    },
    phone: {
      name,
      setName,
      phoneNumber,
      setPhoneNumber,
      isOtpSenting,
    },
    otp: {
      otp,
      setOtp,
      isVerifying,
    },
    fn: {
      verifyOTP,
      handleSendOtp,
    },
    countryCode,
    setCountryCode,
    isOtpSent,
    error,
  };

  return (
    <div>
      <AuthHeader />
      <AuthMain prop={prop} />
      {/* reCAPTCHA container - invisible */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
