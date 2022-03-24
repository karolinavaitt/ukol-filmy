import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movies.js";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
};

render(<App />, document.querySelector("#app"));
