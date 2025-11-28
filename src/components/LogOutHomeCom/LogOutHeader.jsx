import React from "react";
import { Link } from "react-router-dom";

export default function LogOutHeader() {
  return (
    <header className="w-full h-full max-h-[60px] flex justify-between items-center px-5 py-12 *:select-none">
      <section className="flex items-center">
        <h1 className="text-4xl font-medium RC">N_MSG</h1>
      </section>
      <section className="flex items-center">
        <Link
          className="text-[1rem] k font-medium border-border border bg-dark-700/80 hover:bg-dark-600/80 transition-all duration-300 px-5 py-1.5 rounded-xl"
          to="/login"
        >
          Login
        </Link>
      </section>
    </header>
  );
}
