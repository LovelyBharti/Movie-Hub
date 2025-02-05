import { useParams, NavLink } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError, trailerUrl } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading-message" >Loading...</div>;
  }

  if (isError.show) {
    return <div>Error: {isError.msg}</div>;
  }

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <section>
      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "default.jpg"} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p>{movie.Released}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Country}</p>

        {movie.imdbID && (
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
            View on IMDb🎬
          </a>
        )}

        {trailerUrl ? (
          <div>
            <h3>Watch Trailer</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerUrl.split('v=')[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
        ) : (
          <p>No trailer available</p>
        )}

        <NavLink to="/">Go Back 🔙</NavLink>
      </div>
    </section>
  );
};

export default SingleMovie;
