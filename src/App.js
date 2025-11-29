import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Route Component
import AppLayout from "./layouts/AppLayout";
import LogOutHomePage from "./pages/LogOutHomePage";
import AuthPage from "./pages/AuthPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LogOutHomePage />} />
        <Route path="SignIn" element={<AuthPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
