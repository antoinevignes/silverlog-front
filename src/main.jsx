import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "../context/AuthContext.jsx";
import MovieProvider from "../context/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
);
