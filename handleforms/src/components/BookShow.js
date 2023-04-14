import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete }) {
  //5. Recebe a prop book //6.3 Veja que é passada a PROP onDelte aqui, a prop onDelete, remete a função deleteBookById!
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>
  if(showEdit) {
    content = <BookEdit />
  }
  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div> //5.2Retorne o JSX com o titulo do livro
  );
} //6.4 Crie o JSX com os elementos do botão e a div que irá o abrigar. Chame a função onclick do botão, porém ele não deve receber a prop onDelete, por que quando se chama onDelete é esperado que passemps o ID do livro que é para ser deletado. É preciso criar uma função handleClick e chama-la, e ENTÃO dentro dela passar o id do livro que quer ser deletado

export default BookShow;
