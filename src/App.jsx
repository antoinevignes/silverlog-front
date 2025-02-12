import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { routes } from "../routes/Routes";
import Navbar from "./components/ui/Navbar";
import { useAuth } from "../context/auth/AuthContext";
import Footer from "./components/ui/Footer";

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
      <div className="flex flex-col justify-between h-screen">
        {isLoggedIn && <Navbar />}
        <main>
          <Routes>{routes.map(renderRoute)}</Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
