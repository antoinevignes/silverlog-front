import { useParams } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import { useEffect } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const { movie, getMovieByID, credits, getCreditsByID } = useMovies();

  useEffect(() => {
    getMovieByID(id);
    getCreditsByID(id);
  }, [getMovieByID, id, getCreditsByID]);

  useEffect(() => {
    if (movie?.id) {
      console.log(movie);
      console.log(credits);
    }
  }, [movie, credits]);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.original_title}
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="flex items-center gap-10 relative z-10 text-white">
        <div className="flex flex-col gap-5 w-[70%]">
          <h1 className="font-bold">
            {movie.title} ({movie.release_date?.split("-")[0]})
          </h1>
          <p>
            Réalisateur :{" "}
            {credits.crew?.find((person) => person.job === "Director")?.name}
          </p>
          <p>{movie.overview}</p>
        </div>
        <div className="w-[30%]">
          <div className="max-h-[600px] max-w-[400px]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
