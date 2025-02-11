import { useParams } from "react-router-dom";
import { useWatchList } from "../../context/user/WatchListContext";
import { useEffect } from "react";
import { FaClock, FaEye, FaRegClock, FaRegEye } from "react-icons/fa6";
import { useWatched } from "../../context/user/WatchedContext";
import { useToast } from "../../context/Toaster";
import RatingRadio from "./ui/RatingRadio";

export default function UserButtons() {
  const { id } = useParams();

  // CONTEXTS
  const { addToWatchList, watchList, getWatchList, deleteEntry } =
    useWatchList();
  const { addToWatched, getWatched, deleteWatched, watched } = useWatched();
  const { addToast } = useToast();

  // CHECK IF IN
  const isInWatchList = watchList.results?.find((item) => item.id == id);
  const isInWatched = watched.results?.find((item) => item.id == id);

  // LOAD LISTS AT RENDER

  useEffect(() => {
    getWatchList();
  }, [getWatchList]);

  useEffect(() => {
    getWatched();
  }, [getWatched]);

  /////////////////////

  const handleWatchedClick = () => {
    if (isInWatched) {
      deleteWatched(id);
      addToast("Retiré des films");
    } else {
      addToWatched(id);
      addToast("Ajoutés aux films", "success");

      if (isInWatchList) {
        deleteEntry(id);
        addToast("Retiré de la watchlist", "info");
      }
    }
  };

  const handleWatchListClick = () => {
    isInWatchList
      ? (deleteEntry(id), addToast("Retiré de la watchlist."))
      : (addToWatchList(id), addToast("Ajouté à la watchlist !", "success"));
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="tooltip" data-tip="Ajouter à la watchlist">
        <button
          onClick={handleWatchListClick}
          className="btn btn-soft btn-square btn-lg"
        >
          {isInWatchList ? <FaClock /> : <FaRegClock />}
        </button>
      </div>

      <div className="tooltip" data-tip="Ajouter aux films vus">
        <button
          onClick={handleWatchedClick}
          className="btn btn-soft btn-square btn-lg"
        >
          {isInWatched ? <FaEye /> : <FaRegEye />}
        </button>
      </div>

      <RatingRadio />
    </div>
  );
}
