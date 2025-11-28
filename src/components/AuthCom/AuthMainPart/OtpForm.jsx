import React from "react";
import { Loader2 } from "lucide-react";

export default function OtpForm({
  isVerifying,
  handleVerifyOtp,
  handleResendOtp,
  otp,
  setOtp,
  error,
}) {
  return (
    <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 dark:text-gray-300">
          Enter OTP
        </label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="123456"
          maxLength="6"
          className="px-4 py-2 rounded-md border-none outline outline-dark-600/80 focus:outline-primary-glow bg-dark-600 text-white text-center text-2xl tracking-widest"
          required
        />
        <p className="text-xs text-gray-400 mt-1 text-center">
          Enter the 6-digit code sent to your phone
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}

      {isVerifying ? (
        <button
          type="button"
          disabled
          className="flex justify-center items-center gap-2 bg-primary-glow/20 text-white/50 font-medium py-2 rounded-md transition-colors select-none"
        >
          <Loader2 className="animate-spin" />
          Verifying...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-primary-glow text-white font-medium py-2 rounded-md transition-colors select-none hover:bg-primary-glow/90"
        >
          Verify OTP
        </button>
      )}

      <button
        type="button"
        onClick={handleResendOtp}
        className="text-primary-glow text-sm hover:underline"
      >
        Didn't receive code? Resend OTP
      </button>
    </form>
  );
}
