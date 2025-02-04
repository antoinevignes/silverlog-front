import { useMovies } from "../../context/movies/MovieContext";

export default function SearchForm() {
  const { input, setInput, searchMovies, isLoading } = useMovies();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(input);
      }}
      className="sm:mt-0 mt-15 flex gap-2 justify-center"
    >
      <input
        className="w-50 h-12"
        placeholder="Cherchez un film..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="hidden lg:inline button-normal">
        {!isLoading ? (
          "Rechercher"
        ) : (
          <span className="loading loading-spinner loading-md"></span>
        )}
      </button>
    </form>
  );
}
