import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import DrawerDaisy from "./ui/Drawer";

export default function NavigationLinks() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="absolute right-10 top-10 z-[100]">
      {isLoggedIn && (
        <div className="flex items-center">
          <Link className="mr-5" to="/">
            Accueil
          </Link>

          <DrawerDaisy />
        </div>
      )}
      {!isLoggedIn && <Link to="login">Se connecter</Link>}
    </div>
  );
}
