import React, { useContext, useState } from "react";
import AuthHeader from "../components/AuthCom/AuthHeader";
import { useWindowSize } from "@react-hook/window-size";
import { auth } from "../contexts/auth/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

export default function AuthPage() {
  // context
  const { setUpRecaptcha } = useContext(AuthContext);

  // Get Window Height
  const [width, height] = useWindowSize();

  // Set And Get Opt and data system
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSenting, setIsOtpSenting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Value
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  //  Error
  const [error, setError] = useState("");

  // Recapca Verify
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsOtpSenting(true);
    setError("");

    try {
      if (!phoneNumber || phoneNumber.length < 10) {
        throw new Error("Please enter a valid phone number.");
      }

      const appVerifier = await setUpRecaptcha();
      const number = countryCode + phoneNumber; // Assuming India's country code for simplicity
      const confirmation = await signInWithPhoneNumber(
        auth,
        number,
        appVerifier
      );
      setConfirmationResult(confirmation);
      setIsOtpSent(true);
      setError("");
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setIsOtpSenting(false);
    }
  };

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
    },
    otp: {
      otp,
      setOtp,
      isOtpSent,
      isOtpSenting,
      isVerifying,
    },
    fn: {
      handleSendOtp,
    },
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
