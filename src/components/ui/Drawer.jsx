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
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral-900 text-neutral-content w-12 rounded-full">
              <span>{user?.username.substring(0, 1).toUpperCase()}</span>
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
          <div className="avatar avatar-placeholder flex flex-col gap-4 justify-center items-center">
            <div className="bg-neutral-900 text-neutral-content w-16 rounded-full">
              <span>{user?.username.substring(0, 1).toUpperCase()}</span>
            </div>
            <p>{user?.username}</p>
          </div>
          <div className="divider"></div>
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
    </div>
  );
}
