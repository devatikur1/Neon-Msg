import React from "react";
import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="w-full h-full max-h-[60px] flex justify-center border-border border-b items-center px-5 py-9 *:select-none">
      <Link to={"/"} className="text-4xl font-medium RC">
        N_MSG
      </Link>
    </header>
  );
}
