import { useState } from "react";

import MovieEdit from "./MovieEdit";

function MovieShow({ movie, onDelete, onEdit }) {
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
    <div className="book-show">
      <div>RECEBE API DO CARTAZ</div>
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
