import { useMovies } from "../../context/movies/MovieContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchForm() {
  const { input, setInput, searchMovies } = useMovies();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(input);
      }}
    >
      <label className="input">
        <FaMagnifyingGlass className="opacity-50" />
        <input
          type="search"
          placeholder="Cherchez un film..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </form>
  );
}
