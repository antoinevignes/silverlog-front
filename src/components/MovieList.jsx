/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function MovieList({ data }) {
  return (
    <div className="flex gap-4 w-[70%]">
      <div>
        <ul className="list bg-base-100">
          <li className="p-4 pb-2 text-lg opacity-60 tracking-wide text-left">
            Resultats :
          </li>

          {data.results &&
            data.results?.map((movie) => (
              <li key={movie.id} className="list-row">
                <Link to={`/movies/${movie.id}`}>
                  <div className="w-[120px] h-[180px] box-border hover:border rounded-md">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {movie.title}
                      </p>
                    )}
                  </div>
                </Link>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black link link-hover text-left">
                      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <p className="opacity-60">
                      {movie.release_date.split("-")[0]}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-left">{movie.overview}</p>
                  <p className="text-left opacity-60">Genres :</p>
                  <p className="text-left opacity-60">Réalisateur :</p>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <form className="menu mt-12">
        <li>
          <h2 className="menu-title">Filtrer par :</h2>
          <ul>
            <li>
              <a>Tout</a>
            </li>
            <li>
              <a>Films</a>
            </li>
            <li>
              <a>Séries</a>
            </li>
            <li>
              <a>Réalisateurs</a>
            </li>
          </ul>
        </li>
      </form>
    </div>
  );
}
