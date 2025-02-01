import { useParams } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import { useEffect } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const { movie, getMovieByID } = useMovies();

  useEffect(() => {
    getMovieByID(id);
  }, [getMovieByID, id]);

  useEffect(() => {
    if (movie?.id) {
      console.log(movie);
    }
  }, [movie]);

  return <div>{id}</div>;
}
