import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "../context/auth/AuthContext.jsx";
import MovieProvider from "../context/movies/MovieContext.jsx";
import WatchedProvider from "../context/user/WatchedContext.jsx";
import ToastProvider from "../context/Toaster.jsx";
import ProfileProvider from "../context/user/ProfileContext.jsx";
import WatchListProvider from "../context/user/WatchListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <WatchListProvider>
          <WatchedProvider>
            <ToastProvider>
              <ProfileProvider>
                <App />
              </ProfileProvider>
            </ToastProvider>
          </WatchedProvider>
        </WatchListProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
);
