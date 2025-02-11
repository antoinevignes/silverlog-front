import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";

export default function MenuDaisy() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { logout } = useAuth();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar avatar-placeholder"
      >
        <div className="bg-base-300 text-neutral-content w-10 rounded-full">
          <span>{user?.username.substring(0, 1).toUpperCase()}</span>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to="/account/profile">Mon Profil</Link>
        </li>
        <li>
          <Link to="/account/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/account/watched">Mes films</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => logout()}>
            Déconnexion
          </Link>
        </li>
      </ul>
    </div>
  );
}
