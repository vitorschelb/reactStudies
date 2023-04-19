import { useState, useEffect } from "react";

import MovieEdit from "./MovieEdit";

function MovieShow({ movie, onDelete, onEdit }) {
  const [posterSource, setPosterSource] = useState("");

  const getPoster = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=885f4bc7`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setPosterSource(responseJson.Search[0].Poster)
    console.log("GetPoster")
  };
  
  useEffect(() => {
    getPoster(movie.title)
  }, [movie.title]);

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(movie.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3> {movie.title}</h3>;
  if (showEdit) {
    content = <MovieEdit onSubmit={handleSubmit} movie={movie} />;
  }
  return (
    <div className="book-show" >
      <div>
        {posterSource ? <img src={posterSource} alt="movie"/> : <div> {movie.title} </div>}
      </div>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieShow;
