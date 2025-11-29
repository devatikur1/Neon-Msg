import React from "react";
import { Loader2 } from "lucide-react";
import GoogleIcon from "../../../others/GoogleIcon";
import { div } from "framer-motion/client";

export default function GoogleForm({ error, isLoginging, handleLogin }) {
  return (
    <section className="w-full flex flex-col gap-8 mt-8 justify-center items-center">
      {/* Google Login */}
      <button
        onClick={handleLogin}
        className="w-[85%] lg:w-[75%] bg-dark-800 transition-all duration-500 hover:bg-dark-600 border border-border rounded-3xl flex justify-center items-center disabled:opacity-80"
      >
        {isLoginging ? (
          <div className="flex items-center gap-3 py-[0.45rem] md:py-[0.5rem]">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <div className="flex items-center gap-3 py-[0.45rem] md:py-[0.5rem]">
            <span>
              <GoogleIcon size={20} />
            </span>
            <span className="text-[#fff]">Sign in with Google</span>
          </div>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}
    </section>
  );
}
