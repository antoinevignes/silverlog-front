import { useParams } from "react-router-dom";
import { useToast } from "../../../context/Toaster";
import { useWatched } from "../../../context/user/WatchedContext";
import { useWatchList } from "../../../context/user/WatchListContext";
import { useEffect } from "react";

export default function RatingRadio() {
  const { id } = useParams();
  const { addToast } = useToast();
  const { watched, rating, setRating, addToWatched } = useWatched();
  const { watchList, deleteEntry } = useWatchList();

  const isInWatched = watched.results?.find((item) => item.id == id);
  const isInWatchList = watchList.results?.find((item) => item.id == id);

  useEffect(() => {
    if (isInWatched) {
      setRating(isInWatched.rating);
    } else {
      setRating(0);
    }
  }, [isInWatched, setRating]);

  const handleRatingChange = (e) => {
    const value = parseFloat(e.target.getAttribute("aria-label"));
    setRating(value);
    addToWatched(id, value);
    if (isInWatched) {
      addToast("Note mise à jour");
    } else {
      addToast("Ajouté aux films");
    }
    if (isInWatchList) {
      deleteEntry(id);
    }
  };

  return (
    <form
      className="rating rating-lg rating-half"
      onChange={handleRatingChange}
    >
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-1"
        aria-label="0.5"
        checked={rating === 0.5}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-2"
        aria-label="1"
        checked={rating === 1}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-1"
        aria-label="1.5"
        checked={rating === 1.5}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-2"
        aria-label="2"
        checked={rating === 2}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-1"
        aria-label="2.5"
        checked={rating === 2.5}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-2"
        aria-label="3"
        checked={rating === 3}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-1"
        aria-label="3.5"
        checked={rating === 3.5}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-2"
        aria-label="4"
        checked={rating === 4}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-1"
        aria-label="4.5"
        checked={rating === 4.5}
      />
      <input
        type="radio"
        name="rating-11"
        className="mask mask-star-2 mask-half-2"
        aria-label="5"
        checked={rating === 5}
      />
    </form>
  );
}
