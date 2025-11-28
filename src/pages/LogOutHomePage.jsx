import React from "react";
import LogOutHeader from "../components/LogOutHomeCom/LogOutHeader";
import LogOutMain from "../components/LogOutHomeCom/LogOutMain";

export default function LogOutHomePage() {
  return (
    <aside className="w-full h-full flex justify-center">
      <section className="w-[100%] md:w-[90%] lg:w-[80%] xl:w-[50%]">
        <LogOutHeader />
        <LogOutMain />
      </section>
    </aside>
  );
}
