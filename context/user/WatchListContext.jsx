/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { apiFetch } from "../../api/api";

const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState({});

  // POST
  const addToWatchList = async (id) => {
    try {
      await apiFetch("/watchlist/add", {
        method: "POST",
        body: JSON.stringify({ tmdbId: id }),
      });

      await getWatchList();
    } catch (error) {
      console.error(error.message);
    }
  };

  // GET
  const getWatchList = useCallback(async () => {
    try {
      const data = await apiFetch("/watchlist", { method: "GET" });

      if (data.results?.length) {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
          },
        };

        const moviesWithCredits = await Promise.all(
          data.results.map(async (movie) => ({
            ...movie,
            credits: await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=fr-FR`,
              options
            ).then((res) => res.json()),
          }))
        );

        setWatchList({ ...data, results: moviesWithCredits });
      }
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // DELETE
  const deleteEntry = async (id) => {
    try {
      await apiFetch(`/watchlist/${id}`, {
        method: "DELETE",
      });

      await getWatchList();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        setWatchList,
        addToWatchList,
        getWatchList,
        deleteEntry,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within an WatchListProvider");
  }

  return context;
};

export default WatchListProvider;
