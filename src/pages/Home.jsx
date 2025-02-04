import { useMovies } from "../../context/movies/MovieContext";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const { movies } = useMovies();

  return (
    <div className="hero">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md">
          {!movies.results?.length && (
            <div>
              <h1 className="text-5xl font-bold">Silverlog</h1>
              <p className="py-6 text-2xl">
                Le site internet qui vous donne envie de voir des films. Ajoutez
                des films et regardez vos stats monter !
              </p>
            </div>
          )}

          <SearchForm />
        </div>

        {movies && <MovieList data={movies} />}
      </div>
    </div>
  );
}
