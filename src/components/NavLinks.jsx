import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavigationLinks() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="absolute right-10 top-10">
      {isLoggedIn && (
        <Link className="mr-5" to="/">
          Home
        </Link>
      )}
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
