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
    setShowEdit(false) //Conferir 10 abaixo.
  }

  let content = <h3>{book.title}</h3> //7.4 Aqui prossegue com o que foi dito no 7.3. se usa o LET pois a variavel content abriga book.title, que será modificada, então não pode ser uma constante. SE SHOW EDIT for verdadeiro, o conteudo será agora o do componente bookedit. A DIV no JSX, responsavel por mostrar book.title, vai receber CONTENT tambem!
  if(showEdit) {
    content = <BookEdit onSubmit = {handleSubmit} book = {book}/> //8.3 Aqui que se exportar o LIVRO como PROPriedade para BookEdit!!!
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
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
//11. É adicionado o JSX das imagens.

export default BookShow;

//10.Para rechar o fomulario, duas coisas precisam acontecer quando ele é submetido.
// Agora é preciso fazer o componente bookshow entender que precisa fechar o display que é mostrado.
// Não é necessário criar uma outra função de callback e exportar como prop mantendo onEdit, por que onEdit já é comunicado. Seriam 2 funções.
// É criado handlesubmit que recebe o id e o newTitle. 
// nela o estado do display é setado como falso!
// a função de callback de edit é colocada dentro dela!
// Então me bookedit, é retirado o onEdit e colocado apenas o handleSubmit
// agora o onSUbmit que RECEBE OS PARAMETROS de onEdit! 
// Handle submit vai fazer o trabalho das duas!

