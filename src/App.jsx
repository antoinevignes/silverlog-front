import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import Register from "./pages/Register";
import NavigationLinks from "./components/NavLinks";

function App() {
  return (
    <BrowserRouter>
      <NavigationLinks />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
