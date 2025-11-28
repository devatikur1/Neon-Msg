import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="max-w-screen w-screen min-w-screen min-h-screen bg-dark-900 *:text-white/95 overflow-y-auto">
      <Outlet />
    </div>
  );
}
