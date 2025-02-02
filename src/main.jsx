import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "../context/AuthContext.jsx";
import MovieProvider from "../context/MovieContext.jsx";
import WatchListProvider from "../context/watchListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <WatchListProvider>
          <App />
        </WatchListProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
);
