import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import MovieData from "./components/MovieData";

function App() {
  const [movieList, setMovieList] = useState(MovieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const handleSubmit = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div className="App">
      <Navbar />
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />
      <MovieList
        movielist={movieList}
        searchTitle={searchTitle}
        searchRating={searchRating}
      />
      <Add handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
