import React from "react";
import Actor from "../Actor";
import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movie">
      <div className="poster">
        <img className="movie__poster" src={`/assets/${poster}`} alt="Plakát" />
        <p className="movie__rating">
          {rating}
          <span className="movie__rating--add"> / 10</span>{" "}
        </p>
      </div>

      <div className="infoBox">
        <div className="movie__content">
          <h2 className="movie__title">{title}</h2>
          <p className="movie__info">
            <b>Rok vydání: </b>
            {year}
          </p>
          <p className="movie__info">
            <b>Žánr: </b>
            {genre}
          </p>
          <p className="movie__info">
            <b>Režisér: </b>
            {director}
          </p>
        </div>
        <div className="actor">
          <h3>V hlavních rolích:</h3>
          <div className="actor__content">
            {cast.map((actor) => (
              <Actor key={actor.name} name={actor.name} as={actor.as} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
