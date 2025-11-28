import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth/AuthContext";

// Route Component
import AppLayout from "./layouts/AppLayout";
import LogInHomePage from "./pages/LogInHomePage";
import LogOutHomePage from "./pages/LogOutHomePage";
import AuthPage from "./pages/AuthPage";

// Protected Route Component
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

// Public Route Component (redirect to home if already logged in)
function PublicRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : children;
}

// Router Component (needs to be inside AuthProvider)
function AppRouter() {
  const { currentUser } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route
          path="/"
          element={currentUser ? <LogInHomePage /> : <LogOutHomePage />}
        />
        <Route path="login" element={<AuthPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
