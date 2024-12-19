import React, { useState } from "react";

function AllFilms({ addToFavorites }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=6a0c0071`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="all-films">
      <h1>All Films</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} width="100" />
            <button onClick={() => addToFavorites(movie)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFilms;
