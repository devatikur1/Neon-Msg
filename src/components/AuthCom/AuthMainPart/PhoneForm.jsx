import { Loader2 } from "lucide-react";
import React from "react";
import PhoneInput from "react-phone-number-input/input";

export default function PhoneForm({
  phone,
  error,
  handleSendOtp,
  isOtpSenting,
}) {
  let { name, setName, phoneNumber, setPhoneNumber } = phone;
  return (
    <form onSubmit={handleSendOtp} className="w-full flex flex-col gap-10">
      <section className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <article className="w-full relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 rounded-md border-none outline outline-dark-600/80 focus:outline-primary-glow  bg-dark-600 text-white"
              required
            />
          </article>
        </div>

        <div className="w-full flex flex-col">
          <label
            htmlFor="phone"
            className="mb-2 text-gray-700 dark:text-gray-300"
          >
            Phone Number
          </label>
          <article className="w-full relative">
            <PhoneInput
              placeholder="e.g. +1234567890"
              value={phoneNumber}
              onChange={setPhoneNumber}
              id="phone"
              className="w-full px-4 py-2 rounded-md border-none outline outline-dark-600/80 focus:outline-primary-glow  bg-dark-600 text-white"
              required
            />
          </article>
          <p className="text-xs text-gray-400 mt-1">
            Include country code (e.g., +1 for US, +880 for Bangladesh)
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}
      </section>

      {isOtpSenting ? (
        <button
          type="button"
          disabled
          className="flex justify-center items-center gap-2 bg-primary-glow/20 text-white/50 font-medium py-2 rounded-md transition-colors select-none"
        >
          <Loader2 className="animate-spin" />
          Sending OTP...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-primary-glow text-white font-medium py-2 rounded-md transition-colors select-none hover:bg-primary-glow/90"
        >
          Send OTP
        </button>
      )}
    </form>
  );
}
