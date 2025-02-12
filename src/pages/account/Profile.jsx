import { FaMapMarkerAlt, FaUserEdit, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProfile } from "../../../context/user/ProfileContext";

// Mock data
const userData = {
  followers: 1234,
  following: 567,
  favoriteMovies: [
    {
      title: "The Godfather",
      year: 1972,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "Inception",
      year: 2010,
      poster: "/placeholder.svg?height=150&width=100",
    },
  ],
  recentlyAdded: [
    {
      title: "Parasite",
      year: 2019,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "The French Dispatch",
      year: 2021,
      poster: "/placeholder.svg?height=150&width=100",
    },
    {
      title: "Dune",
      year: 2021,
      poster: "/placeholder.svg?height=150&width=100",
    },
  ],
  ratings: [10, 25, 50, 100, 80, 60, 40, 30, 20, 10], // Ratings from 0.5 to 5 stars
};

export default function ProfilePage() {
  const { username, firstName, lastName, bio, location } = useProfile();
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
                  <Link to="/account/profile/edit">Modifier profil</Link>
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
                  <span className="font-bold">{userData.followers}</span>{" "}
                  Followers
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{userData.following}</span>{" "}
                  Suivi(e)s
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3">
          {/* Favorite Movies Section */}
          <div className="card bg-base-200 shadow-md mb-4 p-4">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Favorite Movies</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {userData.favoriteMovies.map((movie, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-24 h-36 object-cover rounded"
                    />
                    <p className="text-sm mt-1">{movie.title}</p>
                    <p className="text-xs text-gray-500">{movie.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recently Added Movies Section */}
          <div className="card bg-base-200 shadow-md mb-4 p-4">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Recently Added</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {userData.recentlyAdded.map((movie, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-24 h-36 object-cover rounded"
                    />
                    <p className="text-sm mt-1">{movie.title}</p>
                    <p className="text-xs text-gray-500">{movie.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
