import { useParams } from "react-router-dom";
import { useWatchList } from "../../context/watchListContext";
import { useEffect } from "react";

export default function UserButtons() {
  const { id } = useParams();

  const { addToWatchList, watchList, fetchWatchList, deleteEntry } =
    useWatchList();

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  const movie = watchList.results?.find((item) => item.id == id);

  return (
    <>
      <button onClick={() => (movie ? deleteEntry(id) : addToWatchList(id))}>
        {movie ? "✓" : "+"}
      </button>
    </>
  );
}
