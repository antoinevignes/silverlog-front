import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavigationLinks() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="flex gap-2 mb-10">
      {isLoggedIn && <Link to="/">Home</Link>}
      {location.pathname === "/" && !isLoggedIn && (
        <Link to="login">Login</Link>
      )}
      {location.pathname === "/" && isLoggedIn && (
        <Link to="/login" onClick={() => logout()}>
          Log Out
        </Link>
      )}
    </div>
  );
}
