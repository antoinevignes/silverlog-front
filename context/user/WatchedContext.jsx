/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { apiFetch } from "../../api/api";

const watchedContext = createContext();

const WatchedProvider = ({ children }) => {
  const [watched, setWatched] = useState({});
  const [rating, setRating] = useState(0);

  // POST
  const addToWatched = async (id, newRating) => {
    try {
      await apiFetch("/watched/add", {
        method: "POST",
        body: JSON.stringify({ tmdbId: id, rating: newRating }),
      });

      await getWatched();
    } catch (error) {
      console.error(error.message);
    }
  };

  // GET
  const getWatched = useCallback(async () => {
    try {
      const data = await apiFetch("/watched", {
        method: "GET",
      });

      setWatched(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // DELETE
  const deleteWatched = async (id) => {
    try {
      await apiFetch(`/watched/${id}`, {
        method: "DELETE",
      });

      await getWatched();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <watchedContext.Provider
      value={{
        addToWatched,
        getWatched,
        deleteWatched,
        watched,
        setRating,
        rating,
      }}
    >
      {children}
    </watchedContext.Provider>
  );
};

export const useWatched = () => {
  const context = useContext(watchedContext);
  if (!context) {
    throw new Error("useWatched must be used within an WatchedProvider");
  }

  return context;
};

export default WatchedProvider;
