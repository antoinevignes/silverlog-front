import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";

export default function DrawerDaisy() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { logout } = useAuth();

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle">
          <div className="avatar">
            <div className="w-10 bg-neutral-400 rounded-full">
              {user?.username.substring(0, 1).toUpperCase()}
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
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
    </div>
  );
}
