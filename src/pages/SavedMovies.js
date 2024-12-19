// import React, { useEffect, useState } from "react";

// function SavedMovies() {
//   const [savedMovies, setSavedMovies] = useState([]);

//   useEffect(() => {
//     const movies = JSON.parse(localStorage.getItem("savedMovies")) || [];
//     setSavedMovies(movies);
//   }, []);

//   return (
//     <div className="saved-container">
//       <h1>Saved Movie List</h1>
//       {savedMovies.length > 0 ? (
//         savedMovies.map((movie) => (
//           <div key={movie.imdbID} className="saved-item">
//             <img src={movie.Poster} alt={movie.Title} width="100" />
//             <h3>
//               {movie.Title} ({movie.Year})
//             </h3>
//           </div>
//         ))
//       ) : (
//         <p>No saved movies found.</p>
//       )}
//     </div>
//   );
// }

// export default SavedMovies;
