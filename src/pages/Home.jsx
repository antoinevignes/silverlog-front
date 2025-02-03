import { useMovies } from "../../context/movies/MovieContext";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const { movies } = useMovies();
  return (
    <>
      {!movies.results?.length && (
        <h1 className="max-w-3xl mb-10 font-bold">
          Cherchez le prochain film à ajouter à votre liste !
        </h1>
      )}

      <SearchForm />

      {movies && <MovieList data={movies} />}
    </>
  );
}
