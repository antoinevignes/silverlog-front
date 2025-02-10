import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import NavigationLinks from "./components/ui/NavLinks";
import { routes } from "../routes/Routes";

const renderRoute = (route) => {
  const element = route.protected ? (
    <ProtectedRoute>{route.element}</ProtectedRoute>
  ) : (
    route.element
  );

  return <Route key={route.path} path={route.path} element={element} />;
};

function App() {
  return (
    <BrowserRouter>
      <NavigationLinks />
      <main>
        <Routes>{routes.map(renderRoute)}</Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
