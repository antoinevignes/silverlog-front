/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState({});
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  // SEARCH MOVIES
  async function searchMovies(input) {
    try {
      setIsSearching(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=fr-FR&page=1`,
        options
      );

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      if (data.results.length === 0) {
        setIsSearching(false);
        return;
      }

      console.log(data);

      setMovies(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  // GET ONE MOVIE
  const getMovieByID = useCallback(async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`,
      options
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    setMovie(data);
  }, []);

  // GET MOVIE CREDITS
  const getCreditsByID = useCallback(async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=fr-FR`,
      options
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    setCredits(data);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        input,
        setInput,
        searchMovies,
        movies,
        movie,
        getMovieByID,
        getCreditsByID,
        credits,
        isSearching,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within an MovieProvider");
  }

  return context;
};

export default MovieProvider;
