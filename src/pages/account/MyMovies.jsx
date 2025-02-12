import { useEffect } from "react";
import MovieList from "../../components/MovieList";
import { useWatched } from "../../../context/user/WatchedContext";

export default function MyMovies() {
  const { watched, getWatched } = useWatched();

  useEffect(() => {
    getWatched();
  }, [getWatched]);

  return (
    <>
      <h2 className="font-bold sm:mt-0 mt-20">Mes films</h2>
      <hr className="w-[50%] mx-auto my-10" />
      {watched.results?.length === 0 && (
        <p>Pas de films à afficher pour le moment...</p>
      )}

      <MovieList data={watched} />
    </>
  );
}
