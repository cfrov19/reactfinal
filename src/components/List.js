import React from "react";

function List({ movies, onRemove, onSave }) {
  return (
    <div className="movie-list">
      <h2>My Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <h3>{movie.Title}</h3>
          <button onClick={() => onRemove(movie.imdbID)}>Remove</button>
        </div>
      ))}
      {movies.length > 0 && (
        <button onClick={onSave} className="save-button">
          Save List
        </button>
      )}
    </div>
  );
}

export default List;

