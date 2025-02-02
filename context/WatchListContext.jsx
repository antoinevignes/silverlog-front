/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { apiFetch } from "../api/api";

const watchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState({});

  // ADD
  const addToWatchList = async (id) => {
    try {
      await apiFetch("/watchlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${import.meta.env.VITE_TMDB_KEY}`,
        },
        body: JSON.stringify({ tmdbId: id }),
      });
      await fetchWatchList();
    } catch (error) {
      console.error(error.message);
    }
  };

  // GET
  const fetchWatchList = useCallback(async () => {
    try {
      const data = await apiFetch("/watchlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
        },
      });

      setWatchList(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // DELETE
  const deleteEntry = async (id) => {
    try {
      await apiFetch(`/watchlist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
        },
      });
      await fetchWatchList();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <watchListContext.Provider
      value={{
        watchList,
        setWatchList,
        addToWatchList,
        fetchWatchList,
        deleteEntry,
      }}
    >
      {children}
    </watchListContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(watchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within an WatchListProvider");
  }

  return context;
};

export default WatchListProvider;
