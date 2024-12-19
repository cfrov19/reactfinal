import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Movie from "./components/Movie";
import List from "./components/List";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import "./styles/Favorites.css";
import "./styles/List.css";


const API_KEY = "6a0c0071";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const randomTitles = ["Batman", "Avengers", "Star Wars", "Harry Potter"];
      const title = randomTitles[Math.floor(Math.random() * randomTitles.length)];
      const response = await fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };
    fetchRandomMovies();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const addMovie = (movie) => {
    if (!selectedMovies.some((m) => m.imdbID === movie.imdbID)) {
      setSelectedMovies([...selectedMovies, movie]);
    }
  };

  const removeMovie = (id) => {
    setSelectedMovies(selectedMovies.filter((movie) => movie.imdbID !== id));
  };

  const handleSave = () => {
    localStorage.setItem("savedMovies", JSON.stringify(selectedMovies));
    navigate("/favorites");
  };

  return (
    <div className="app">
      <Navbar />
      <Logo />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="content">
        <div className="movies-section">
          <h2>All Movies</h2>
          <div className="movies">
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} onAdd={addMovie} />
            ))}
          </div>
        </div>
        <div className="list-section">
          <List movies={selectedMovies} onRemove={removeMovie} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}

export default App;





