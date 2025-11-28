import React from "react";
import PhoneForm from "./AuthMainPart/PhoneForm";

export default function AuthMain({ prop }) {
  const { size, phone, otp, error, fn } = prop;
  return (
    <section
      style={{ height: `${size.height - 80}px`, width: `${size.width}px` }}
      className="flex justify-center items-center"
    >
      <div className="bg-dark-600/50 border border-border backdrop-blur-sm p-10 rounded-xl shadow-lg w-full max-w-md select-none *:select-none">
        {/* Logo / Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 RC select-none">
          Login
        </h2>

        {/* Login Form */}

        <PhoneForm
          phone={phone}
          error={error}
          handleSendOtp={fn.handleSendOtp}
          isOtpSenting={otp.isOtpSenting}
        />
      </div>
    </section>
  );
}
