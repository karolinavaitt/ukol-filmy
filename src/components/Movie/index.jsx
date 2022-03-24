import React from "react";

const Movie = ({ title, poster, year, rating, genre, cast }) => {
  return (
    <div className="movie">
      <img className="movie__poster" src={`.assets/${poster}`} alt="Plakát" />
      <p className="movie__rating">{rating}</p>

      <div className="movie__content">
        <h2 className="movie__title">{title}</h2>
        <h3 className="movie__info">
          <strong>Rok vydání:</strong>
          {year}
        </h3>
        <h3 className="movie__info">
          <strong>Žánr:</strong>
          {genre}
        </h3>
        <h3 className="movie__info">
          <strong>Režisér:</strong>
          {director}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
