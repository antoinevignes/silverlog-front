import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "../context/auth/AuthContext.jsx";
import MovieProvider from "../context/movies/MovieContext.jsx";
import WatchedProvider from "../context/user/WatchedContext.jsx";
import WatchListProvider from "../context/user/watchListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <WatchListProvider>
          <WatchedProvider>
            <App />
          </WatchedProvider>
        </WatchListProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
);
