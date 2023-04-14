import { useState } from "react"; //1,1.Determinar o useState
import BookCreate from "./components/BookCreate"; //2,2. Import the create Component.
import BookList from "./components/BookList"; //4. Import the BookList Component

function App() {
  const [books, setBooks] = useState([]); //1,2. Os livros serão adicionados no array pelo BookCreate.
  
  const deleteBookById = (id) => { //6.1 Criar a função para deletar os livros no app, através de um filter.
    const deletedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(deletedBooks)
  }

  const CreateBook = (title) => { //2,1. Create the Event Handler.
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]; //4. Adicione dentro do add function, a função para gerar um ID aleatório para seu livro, esse método não gera ID único, mas é o suficiente para a aplicação.
    setBooks(updatedBooks); //4.1 . Create the ADD function
  };

  return (
    <div className="app">
      <BookList books= {books} onDelete={deleteBookById}/> 
      <BookCreate onCreate={CreateBook} />
    </div>
  ); //2,3. Display the Prop CreateBook on App, can be any name (onOrange). Passa a prop criada em app, para gerar o id aleatorio para cada titulo recebido. O componente BookCreate se trata do fomulario de envio da informação. A prop aqui apenas modifica o valor enviado!
  //5.1 Chame o componente BookList para o JSX, com a prop Books, enviando para o componente.
  //6.2 Crie a prop onDelete em BookList, ou seja, ela é enviada para Booklist.js, comunicando assim a função desejada para o outro componente, e por fim passe a função deleteBookById para ela,
}

export default App;
