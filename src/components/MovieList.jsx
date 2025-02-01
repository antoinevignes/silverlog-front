import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";

export default function MovieList() {
  const { movies } = useMovies();

  return (
    <div
      className={`p-10 ${
        movies.results?.length > 1
          ? "grid grid-cols-4 gap-10"
          : "flex justify-center"
      }`}
    >
      {movies.results &&
        movies.results.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-[200px] text-center">
              <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {movie.original_title} ({movie.release_date.substring(0, 4)})
              </p>

              <div className="h-[300px] w-[200px]">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
