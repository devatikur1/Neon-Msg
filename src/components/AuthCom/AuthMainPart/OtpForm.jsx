import React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export default function OtpForm({ otp, error, verifyOTP, handleSendOtp }) {
  return (
    <form onSubmit={verifyOTP} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 dark:text-gray-300">
          Enter OTP
        </label>

        <input
          type="text"
          value={otp.otp}
          onChange={(e) => otp.setOtp(e.target.value)}
          placeholder="123456"
          maxLength="6"
          required
          className={clsx(
            "px-4 py-2 rounded-md border-none ring-0 outline bg-dark-600 text-white text-center text-2xl tracking-widest transition-all",
            otp.isVerifying && "cursor-not-allowed opacity-50",
            error !== "" && "outline-red-500 focus:outline-red-500",
            error === "" && "outline-dark-600/80 focus:outline-primary-glow"
          )}
        />

        <p className="text-xs text-gray-400 mt-2 text-center">
          Enter the 6-digit code sent to your phone
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}

      <button
        type={otp.isVerifying ? "button" : "submit"}
        disabled={otp.isVerifying}
        className={`flex justify-center items-center gap-2 font-medium py-2 rounded-md transition-all duration-300 select-none 
          ${
            otp.isVerifying
              ? "bg-primary-glow/20 text-white/50"
              : "bg-primary-glow/30 text-white hover:bg-primary-glow"
          }`}
      >
        {otp.isVerifying && <Loader2 className="animate-spin" />}
        {otp.isVerifying ? "Verifying OTP..." : "Verify OTP"}
      </button>

      <button
        type="button"
        className="text-primary-glow text-sm hover:underline"
        onClick={handleSendOtp}
      >
        Didn't receive code? Resend OTP
      </button>
    </form>
  );
}
