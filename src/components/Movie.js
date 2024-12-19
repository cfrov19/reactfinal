import React from "react";

function Movie({ movie, onAdd }) {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} width="100" />
      <h3>
        {movie.Title} ({movie.Year})
      </h3>
      <button onClick={() => onAdd(movie)}>Add to List</button>
    </div>
  );
}

export default Movie;
