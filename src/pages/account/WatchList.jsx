import { useEffect } from "react";
import { useWatchList } from "../../../context/user/watchListContext";
import MovieList from "../../components/MovieList";

export default function WatchList() {
  const { watchList, fetchWatchList } = useWatchList();

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  return (
    <>
      <h1 className="font-bold sm:mt-0 mt-20">Ma Watchlist</h1>
      <hr className="w-[50%] mx-auto my-10" />

      {watchList.results?.length === 0 ? (
        <p>Pas de films à afficher pour le moment...</p>
      ) : (
        <p>Vous voulez voir {watchList.results?.length} films :</p>
      )}

      <MovieList data={watchList} />
    </>
  );
}
