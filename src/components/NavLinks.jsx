import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavigationLinks() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="absolute right-10 top-10 z-10">
      {isLoggedIn && (
        <>
          <Link className="mr-5" to="/">
            Accueil
          </Link>
          <Link to="/account/watchlist" className="mr-5">
            Watchlist
          </Link>
          <Link to="/login" onClick={() => logout()}>
            Se déconnecter
          </Link>
        </>
      )}
      {!isLoggedIn && <Link to="login">Se connecter</Link>}
    </div>
  );
}
