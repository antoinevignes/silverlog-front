import { FaMapMarkerAlt, FaUserEdit, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProfile } from "../../../context/user/ProfileContext";
import { useWatchList } from "../../../context/user/WatchListContext";
import { useEffect } from "react";

export default function ProfilePage() {
  const { username, firstName, lastName, bio, location } = useProfile();
  const { getWatchList, watchList } = useWatchList();

  useEffect(() => {
    getWatchList();
  }, [getWatchList]);

  console.log(watchList.results);

  const lastMovies = watchList.results?.slice(0, 5);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Main Profile Section */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <div className="card bg-base-200 shadow-md p-4">
            <div className="avatar avatar-placeholder flex justify-center items-center pt-10">
              <div className="bg-base-300 text-neutral-content w-24 rounded-full">
                <span className="text-3xl">
                  {username.substring(0, 1).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">
                {firstName} {lastName}
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaMapMarkerAlt /> {location}
              </p>
              <p className="mt-2">{bio}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-soft">
                  <FaUserEdit />
                  <Link to="/profile/edit">Modifier profil</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Followers/Following Section */}
          <div className="card bg-base-200 shadow-md mt-4 p-4">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <FaUserFriends className="text-xl" />
                <div className="flex items-center gap-2">
                  <span className="font-bold">0</span> Followers
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">0</span> Suivi(e)s
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3">
          {/* WATCHLIST */}
          <div className="card bg-base-200 shadow-md mb-4 p-4">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Ma Watchlist</h3>
              <div className="flex gap-2">
                {lastMovies?.map((movie, index) => (
                  <Link to={`/movies/${movie.id}`} key={index}>
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md hover:border"
                      />
                    ) : (
                      <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {movie.title}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
              <Link to="/profile/watchlist" className="mt-4 text-right">
                <p className="link link-hover">Voir tout</p>
              </Link>
            </div>
          </div>

          {/* MES FILMS */}
          <div className="card bg-base-200 shadow-md mb-4 p-4">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Mes Films</h3>
              <div className="flex gap-2">
                {lastMovies?.map((movie, index) => (
                  <Link to={`/movies/${movie.id}`} key={index}>
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md hover:border"
                      />
                    ) : (
                      <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {movie.title}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
              <Link to="/profile/watchlist" className="mt-4 text-right">
                <p className="link link-hover">Voir tout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
