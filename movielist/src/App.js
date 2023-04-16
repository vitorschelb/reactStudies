import { useState } from "react";
import MovieCreate from "./components/MovieCreate";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const editMovieById = (id, newTitle) => {
    const updatedMovies = movies.map((movie) => {
      if(movie.id === id) {
        return { ...movie, title: newTitle}
      }
      return movie
    })
    setMovies(updatedMovies)
  }

  const deleteMovieById = (id) => {
    const deletedMovies = movies.filter((movie) => {return movie.id !== id;});

    setMovies(deletedMovies)
  }
  const CreateMovie = (title) => {
    const updatedMovies = [
      {
        ...movies,
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setMovies(updatedMovies);
  };
  return (
    <div className="app">
      <h1>Movie List</h1>
      <MovieList onEdit={editMovieById} movies = {movies} onDelete={deleteMovieById}/>
      <MovieCreate onCreate={CreateMovie} />
    </div>
  );
}

export default App;
