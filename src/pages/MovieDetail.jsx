import { Link, useParams } from "react-router-dom";
import { useMovies } from "../../context/movies/MovieContext";
import { useEffect } from "react";
import UserButtons from "../components/UserButtons";
import { FaArrowLeft } from "react-icons/fa6";

export default function MovieDetail() {
  const { id } = useParams();
  const { movie, getMovieByID, credits, getCreditsByID } = useMovies();

  useEffect(() => {
    getMovieByID(id);
    getCreditsByID(id);
  }, [getMovieByID, id, getCreditsByID]);

  return (
    <>
      <div className="z-[100] absolute top-25 left-10">
        <Link to="/" className="link link-hover flex items-center gap-2">
          <FaArrowLeft /> Retour
        </Link>
      </div>
      {movie.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.original_title}
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />
      )}

      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      <div className="flex items-center gap-10 relative z-10">
        <div className="flex flex-col items-center gap-5 w-[100%] sm:w-[70%]">
          <h1 className="font-bold">
            {movie.title} (
            {movie.release_date ? movie.release_date?.split("-")[0] : "TBA"})
          </h1>
          <p>
            Réalisateur :{" "}
            {credits.crew?.find((person) => person.job === "Director")?.name}
          </p>
          <p className="border-l-1 pl-6 mx-auto lg:w-[70%]">{movie.overview}</p>
          <UserButtons />
        </div>

        <div className="sm:w-[30%] hidden sm:inline">
          <div className="max-h-[600px] max-w-[400px]">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-full object-cover"
              />
            ) : (
              <p>Pas d&apos;image disponible</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
