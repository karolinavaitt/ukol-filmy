import React from "react";
import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="movie__list">
      {movies.map((movie) => (
        <Movie
          movie={movie.id}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre}
          cast={movie.cast}
        />
      ))}
    </div>
  );
};

export default MovieList;
