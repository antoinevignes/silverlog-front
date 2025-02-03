import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import { Avatar, Divider, Drawer } from "@mui/material";
import { useState } from "react";

export default function NavigationLinks() {
  const { isLoggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="absolute right-10 top-10 z-10">
      {isLoggedIn && (
        <div className="flex items-center">
          <Link className="mr-5" to="/">
            Accueil
          </Link>

          <button onClick={toggleDrawer(true)} className="cursor-pointer">
            <Avatar>{user?.username.substring(0, 1).toUpperCase()}</Avatar>
          </button>

          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor="right"
            PaperProps={{
              sx: {
                backgroundColor: "gray",
                width: 200,
              },
            }}
          >
            <div className="flex items-center gap-2 text-sm m-5">
              <h1 className="text-white">{user?.username}</h1>
              <Avatar>{user?.username.substring(0, 1).toUpperCase()}</Avatar>
            </div>
            <Divider />
            <div className="flex flex-col gap-2 m-3">
              <Link to="/account/watchlist" className="mr-5">
                Watchlist
              </Link>
              <Link to="/account/watched" className="mr-5">
                Mes films
              </Link>
            </div>
            <Divider />
            <Link to="/login" onClick={() => logout()} className="m-3">
              Se déconnecter
            </Link>
          </Drawer>
        </div>
      )}
      {!isLoggedIn && <Link to="login">Se connecter</Link>}
    </div>
  );
}
