import React from "react";
import { Loader2 } from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function PhoneForm({
  phone,
  error,
  handleSendOtp,
  isOtpSenting,
}) {
  const { name, setName, phoneNumber, setPhoneNumber } = phone;

  return (
    <form onSubmit={handleSendOtp} className="w-full flex flex-col gap-8">
      {/* Name Input */}
      <div className="flex flex-col w-full">
        <label
          htmlFor="name"
          className="mb-2 text-gray-300 dark:text-gray-200 font-medium"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full px-4 py-2.5 rounded-lg bg-dark-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-glow transition"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="flex flex-col w-full">
        <label
          htmlFor="phone"
          className="mb-2 text-gray-300 dark:text-gray-200 font-medium"
        >
          Phone Number
        </label>
        <div className="phoneInput relative">
          <PhoneInput
            id="phone"
            placeholder="e.g. 0123456789"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="w-full  rounded-lg bg-dark-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-glow transition"
          />
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Don't Include country code (e.g., +1 for US, +880 for Bangladesh)
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* OTP Button */}
      <button
        type={isOtpSenting ? "button" : "submit"}
        disabled={isOtpSenting}
        className={`flex justify-center items-center gap-2 font-medium py-2 rounded-md transition-all duration-300 select-none 
          ${
            isOtpSenting
              ? "bg-primary-glow/20 text-white/50"
              : "bg-primary-glow/30 text-white hover:bg-primary-glow"
          }`}
      >
        {isOtpSenting && <Loader2 className="animate-spin" />}
        {isOtpSenting ? "Sending OTP..." : "Send OTP"}
      </button>
    </form>
  );
}
