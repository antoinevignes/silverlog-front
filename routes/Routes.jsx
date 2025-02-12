import MyMovies from "../src/pages/account/MyMovies";
import WatchList from "../src/pages/account/WatchList";
import Login from "../src/pages/auth/Login";
import Register from "../src/pages/auth/Register";
import Home from "../src/pages/Home";
import MovieDetail from "../src/pages/MovieDetail";
import EditProfile from "../src/pages/account/EditProfile";
import ProfilePage from "../src/pages/account/Profile";

export const routes = [
  {
    path: "/",
    element: <Home />,
    protected: true,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
    protected: true,
  },
  {
    path: "/account/profile",
    element: <ProfilePage />,
    protected: true,
  },
  {
    path: "/account/profile/edit",
    element: <EditProfile />,
    protected: true,
  },
  {
    path: "/account/watchlist",
    element: <WatchList />,
    protected: true,
  },
  {
    path: "/account/watched",
    element: <MyMovies />,
    protected: true,
  },
  {
    path: "/login",
    element: <Login />,
    protected: false,
  },
  {
    path: "/register",
    element: <Register />,
    protected: false,
  },
];
