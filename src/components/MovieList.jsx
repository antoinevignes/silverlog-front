/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function MovieList({ data }) {
  const filteredData = data.results?.filter((item) => item.poster_path);

  return (
    <div
      className={`p-10 ${
        filteredData?.length > 1
          ? "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10"
          : "flex justify-center"
      }`}
    >
      {filteredData &&
        filteredData?.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-[200px] text-center">
              <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {movie.title} (
                {movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : "TBA"}
                )
              </p>

              <div className="h-[300px] w-[200px] flex justify-center items-center">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <p>Pas d&apos;image disponible</p>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
