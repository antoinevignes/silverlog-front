import { useMovies } from "../../context/movies/MovieContext";

export default function SearchForm() {
  const { input, setInput, searchMovies } = useMovies();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(input);
      }}
    >
      <label className="input bg-neutral-900">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Cherchez un film..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </form>
  );
}
