import { useMovies } from "../../context/MovieContext";

export default function SearchForm() {
  const { input, setInput, searchMovies } = useMovies();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(input);
      }}
    >
      <input
        className="w-50 h-12"
        placeholder="Cherchez un film..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Rechercher</button>
    </form>
  );
}
