import React from "react";
import MovieCard from "./MovieCards";
import "../App.css";

export default function MovieList({ movielist, searchTitle, searchRating }) {
  return (
    <div className="bodyy">
      <div className="movieListContainer">
        {movielist
          .filter(
            (el) =>
              el.Title.toLowerCase().includes(
                searchTitle.toLowerCase().trim()
              ) && el.Rating >= searchRating
          )
          .map((el, key) => (
            <MovieCard key={el.id} movie={el} />
          ))}
      </div>
    </div>
  );
}
