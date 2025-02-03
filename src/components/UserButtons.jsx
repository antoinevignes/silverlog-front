import { useParams } from "react-router-dom";
import { useWatchList } from "../../context/watchListContext";
import { useEffect } from "react";
import { FaClock, FaRegClock, FaRegEye } from "react-icons/fa6";
import Stars from "./Stars";

export default function UserButtons() {
  const { id } = useParams();

  const { addToWatchList, watchList, fetchWatchList, deleteEntry } =
    useWatchList();

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  const movie = watchList.results?.find((item) => item.id == id);

  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => (movie ? deleteEntry(id) : addToWatchList(id))}>
        {movie ? (
          <div className="flex items-center gap-2">
            <FaClock /> Watchlist
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <FaRegClock /> À voir
          </div>
        )}
      </button>

      <button>
        <div className="flex items-center gap-2">
          <FaRegEye /> Vu
        </div>
      </button>

      <p className="font-bold text-lg">Note : </p>
      <Stars iconSize={25} color={"white"} />
    </div>
  );
}
