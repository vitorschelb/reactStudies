import { useState } from "react";


function BookEdit({book, onEdit}) {
  const [title, setTitle] = useState(book.title); //8.3 é importado de BookShow o titulo do livro defalut que deseja mudar, para ser o estado inicial do componente BookEdit.

  const handleChange = (event) => {
    setTitle(event.target.value);
  }; //8.1 É criado o Event Handler para toda vez que o input for modificado se  o event handler vai chamar o evento, e o evento vai ser usado para modificar o estado do titulo.
  
  const handleSubmit = (event) => { //8.2 É criado o evento para submissão de do formulário, sem esse evento, a informação é perdida. 
    event.preventDefault()
    onEdit(book.id, title) //9.2 Aqui a magica acontece! Quando finalmente a função onEdit chega no componente, ela é colocada na função de callback, ou event handler, como edesejar chamar, dos formulários enviados. Ela então como esta dentro do componente, pode comunicar as variaveis recebidas da edição, ela então envia todo o caminho de volta o id e o NOVO TITULO!
  }
  
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
//8. Como já dito antes, sempre que se tem um Input,quer dizer que se irá alterar algo do estado. E se vai alterar algo do estado é preciso criar um estado para esse input.
