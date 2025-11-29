import React, { useContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { FirebaseContext } from "./contexts/app/FirebaseProvider";

// Route Component
import AppLayout from "./layouts/AppLayout";
import AuthPage from "./pages/AuthPage";
import LogInHomePage from "./pages/LogInHomePage";
import LogOutHomePage from "./pages/LogOutHomePage";

export default function App() {
  // 🔹 Firebase Auth Data & Context
  const { authData } = useContext(FirebaseContext);
  const { isLogged } = authData;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={isLogged ? <LogInHomePage /> : <LogOutHomePage />}
        />
        <Route path="SignIn" element={<AuthPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
