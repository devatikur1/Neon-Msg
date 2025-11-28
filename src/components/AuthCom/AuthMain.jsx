import React from "react";
import GoogleForm from "./AuthMainPart/GoogleForm";

export default function AuthMain({ prop }) {
  const { width, height } = prop.size;
  const { isLoginging, error } = prop.others;
  const { handleLogin } = prop.fn;

  return (
    <section
      style={{ height: `${height - 80}px`, width: `${width}px` }}
      className="flex justify-center items-center"
    >
      <div className="bg-dark-600/50 border border-border backdrop-blur-sm p-10 rounded-xl shadow-lg w-full max-w-md select-none *:select-none">
        {/* Logo / Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 RC select-none">
          Login
        </h2>
        <GoogleForm
          error={error}
          isLoginging={isLoginging}
          handleLogin={handleLogin}
        />
      </div>
    </section>
  );
}
