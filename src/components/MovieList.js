import React from "react";
import MovieCard from "./MovieCards";

export default function MovieList({ movielist, setSearchTitle }) {
  return (
    <div>
      <div className="movieListContainer">
        {movielist.map((el, key) => (
          <MovieCard key={el.id} movie={el} />
        ))}
      </div>
    </div>
  );
}
