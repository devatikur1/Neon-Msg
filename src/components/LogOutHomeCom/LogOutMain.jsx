import React from "react";
import NeonSVG from "../../others/NeonSVG";
import { Link } from "react-router-dom";

export default function LogOutMain() {
  return (
    <main className="w-full h-full mt-[60px] flex items-center justify-center">
      <section className="flex flex-col items-center">
        <NeonSVG />
        <h1 className="text-2xl R font-medium text-white/80 mb-2">Neon Msg</h1>
        <p className="i text-white/50">
          Let your friends know what’s happening
        </p>
        <section className="flex items-center mt-5">
          <Link
            className="text-[1rem] R font-[600] border border-border bg-white/90 text-dark-700 px-5 py-1.5 rounded-xl"
            to="/login"
          >
            Login
          </Link>
        </section>
      </section>
    </main>
  );
}
