import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../contexts/auth/firebaseConfig";

export default async function fnUpRecaptchaAndSendOtp(phoneNumber) {
  try {
    auth.settings.appVerificationDisabledForTesting = true;
    // Clear previous verifier
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
      } catch {}
      window.recaptchaVerifier = null;
    }

    // Create a invisible recaptcha
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA solved. Sending OTP...");
        },
        "expired-callback": () => console.log("reCAPTCHA expired"),
      },
      auth
    );

    // Render recaptcha
    await window.recaptchaVerifier.render();

    // send OTP
    const confirmation = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );

    window.confirmationResult = confirmation;
    console.log("🚀 OTP Sent Successfully!");

    return { success: true, confirmation };
  } catch (err) {
    console.error("❌ OTP Sending Failed:", err.message);
    return { success: false, error: err.message };
  }
}
