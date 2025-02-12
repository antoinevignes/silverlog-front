import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { routes } from "../routes/Routes";
import Navbar from "./components/ui/Navbar";
import { useAuth } from "../context/auth/AuthContext";

const renderRoute = (route) => {
  const element = route.protected ? (
    <ProtectedRoute>{route.element}</ProtectedRoute>
  ) : (
    route.element
  );

  return <Route key={route.path} path={route.path} element={element} />;
};

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      {isLoggedIn && (
        <div className="absolute top-0 left-0 w-full z-[100]">
          <Navbar />
        </div>
      )}
      <main>
        <Routes>{routes.map(renderRoute)}</Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
