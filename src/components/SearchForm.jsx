import { useMovies } from "../../context/movies/MovieContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useCallback } from "react";

export default function SearchForm() {
  const { input, setInput, searchMovies } = useMovies();

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      setInput(value);
      searchMovies(value);
    },
    [setInput, searchMovies]
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className="input bg-neutral-900">
        <FaMagnifyingGlass className="opacity-50" />
        <input
          type="search"
          placeholder="Cherchez un film..."
          value={input}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
