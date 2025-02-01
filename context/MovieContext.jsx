/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState({});
  const [movie, setMovie] = useState({});

  // SEARCH MOVIES
  async function searchMovies(input) {
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
    const data = await response.json();

    setMovies(data);
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

    const data = await response.json();
    setMovie(data);
  }, []);

  return (
    <MovieContext.Provider
      value={{ input, setInput, searchMovies, movies, movie, getMovieByID }}
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
