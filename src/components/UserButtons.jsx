import { useParams } from "react-router-dom";
import { useWatchList } from "../../context/user/WatchListContext";
import { useEffect } from "react";
import { FaClock, FaEye, FaRegClock, FaRegEye } from "react-icons/fa6";
import { useWatched } from "../../context/user/WatchedContext";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useToast } from "../../context/Toaster";

export default function UserButtons() {
  const { id } = useParams();

  // CONTEXTS
  const { addToWatchList, watchList, fetchWatchList, deleteEntry } =
    useWatchList();
  const {
    addToWatched,
    getWatched,
    deleteWatched,
    watched,
    rating,
    setRating,
  } = useWatched();
  const { addToast } = useToast();

  // CHECK IF IN
  const isInWatchList = watchList.results?.find((item) => item.id == id);
  const isInWatched = watched.results?.find((item) => item.id == id);

  // LOAD LISTS AT RENDER
  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  useEffect(() => {
    getWatched();
  }, [getWatched]);

  useEffect(() => {
    if (isInWatched) {
      setRating(isInWatched.rating);
    } else {
      setRating(0);
    }
  }, [isInWatched, setRating]);

  const handleWatchedClick = async () => {
    if (isInWatched) {
      await deleteWatched(id);
      addToast("Retiré des films");
    } else {
      await addToWatched(id);
      addToast("Ajoutés aux films", "success");

      if (isInWatchList) {
        await deleteEntry(id);
        addToast("Retiré de la watchlist", "info");
      }
    }
  };

  const handleRatingChange = async (e, newRating) => {
    await setRating(newRating);
    if (newRating > 0) {
      await addToWatched(id, newRating);
      addToast("Ajoutés aux films", "success");

      if (isInWatchList) {
        await deleteEntry(id);
        addToast("Retiré de la watchlist", "info");
      }
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="tooltip" data-tip="Ajouter à la watchlist">
        <button
          onClick={() =>
            isInWatchList
              ? (deleteEntry(id), addToast("Retiré de la watchlist."))
              : (addToWatchList(id),
                addToast("Ajouté à la watchlist !", "success"))
          }
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

      <Rating
        name="half-rating"
        precision={0.5}
        size="large"
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, color: "gray" }}
            fontSize="inherit"
          />
        }
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
}
