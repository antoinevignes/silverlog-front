import { useMovies } from "../../context/movies/MovieContext";

export default function SearchForm() {
  const { input, setInput, searchMovies, isSearching } = useMovies();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(input);
      }}
      className="sm:mt-0 mt-15"
    >
      <input
        className={!isSearching ? "w-50 h-12" : "w-50 h-12 md:block lg:inline"}
        placeholder="Cherchez un film..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="hidden lg:inline">Rechercher</button>
    </form>
  );
}
