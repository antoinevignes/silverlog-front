import { useEffect } from "react";
import { useWatchList } from "../../../context/watchListContext";
import MovieList from "../../components/MovieList";

export default function WatchList() {
  const { watchList, fetchWatchList } = useWatchList();

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  return (
    <>
      <h1 className="font-bold">Ma Watchlist</h1>
      <hr className="w-[50%] mx-auto mt-10" />
      <MovieList data={watchList} />
    </>
  );
}
