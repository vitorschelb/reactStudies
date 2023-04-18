import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title); //8.3 é importado de BookShow o titulo do livro defalut que deseja mudar, para ser o estado inicial do componente BookEdit.
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }; //8.1 É criado o Event Handler para toda vez que o input for modificado se  o event handler vai chamar o evento, e o evento vai ser usado para modificar o estado do titulo.

  const handleSubmit = (event) => {
    //8.2 É criado o evento para submissão de do formulário, sem esse evento, a informação é perdida.
    event.preventDefault();
    onSubmit(); //9.2 Aqui a magica acontece! Quando finalmente a função onEdit chega no componente, ela é colocada na função de callback, ou event handler, como edesejar chamar, dos formulários enviados. Ela então como esta dentro do componente, pode comunicar as variaveis recebidas da edição, ela então envia todo o caminho de volta o id e o NOVO TITULO! VERIFICAR ATUALIZAÇÃO NO 10 EM BOOKSHOW!
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
//8. Como já dito antes, sempre que se tem um Input,quer dizer que se irá alterar algo do estado. E se vai alterar algo do estado é preciso criar um estado para esse input. Vamos manter onSubmit pois ainda é necessário o componente BookShow sabe quando fechar a janela de edição, e como essa função é comunicada apenas entre os dois, ela não entrou no context, entretando não é preciso mais passar os argumentos: book.id, title, os argumentos vão para EditBook. Em outras palavras, onSubmit FECHA O FORMULÁRIO e o editBookByID que faz a função de edita.
