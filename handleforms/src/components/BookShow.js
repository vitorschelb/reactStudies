import { useState } from "react";
import BookEdit from "./BookEdit"; //7.3 É importado o componente book edit, que vai realmente conter a função de editar. Aqui em BookSHOW, o que se esta fazendo é a possibilidade de MOSTRAR, SHOW, o display de edição! Ao clicar no edit, a interação vai ser com a função do componente BookEdit!

function BookShow({ book, onDelete, onEdit }) {
  //5. Recebe a prop book //6.3 Veja que é passada a PROP onDelte aqui, a prop onDelete, remete a função deleteBookById!
  const [showEdit, setShowEdit] = useState(false); //7.É criado um estado para gerenciar o estado se vai estar ativo ou não o dispay de editar.

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3> //7.4 Aqui prossegue com o que foi dito no 7.3. se usa o LET pois a variavel content abriga book.title, que será modificada, então não pode ser uma constante. SE SHOW EDIT for verdadeiro, o conteudo será agora o do componente bookedit. A DIV no JSX, responsavel por mostrar book.title, vai receber CONTENT tambem!
  if(showEdit) {
    content = <BookEdit onSubmit = {handleSubmit} book = {book}/> //8.3 Aqui que se exportar o LIVRO como PROPriedade para BookEdit!!!
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

//7.1 É criado o botão de edit. 
//7.2 É criado o evento de clique, o clique ativar e desativar o display de edição.

export default BookShow;
