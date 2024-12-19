import React, { useEffect, useState } from "react";

function Favorites({ removeFromFavorites }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    setFavorites(savedMovies);
  }, []);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>No favorite movies added yet!</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="favorite-item">
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} width="100" />
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="imdb-link"
              >
                View on IMDB
              </a>
              {/* <button onClick={() => removeFromFavorites(movie.imdbID)}>
                Remove
              </button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
