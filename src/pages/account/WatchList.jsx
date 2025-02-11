import { useEffect } from "react";
import { useWatchList } from "../../../context/user/WatchListContext";
import MovieList from "../../components/MovieList";

export default function WatchList() {
  const { watchList, getWatchList } = useWatchList();

  useEffect(() => {
    getWatchList();
  }, [getWatchList]);

  return (
    <>
      <h1 className="font-bold sm:mt-0 mt-20">Ma Watchlist</h1>
      <div className="divider w-[450px] mx-auto"></div>

      {watchList.results?.length === 0 && (
        <p>Pas de films à afficher pour le moment...</p>
      )}

      <MovieList data={watchList} />
    </>
  );
}
