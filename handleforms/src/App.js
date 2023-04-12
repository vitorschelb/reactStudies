import { useState } from "react"; //1,1.Determinar o useState
import BookCreate from "./components/BookCreate"; //2,2. Import the create Component.
import BookList from "./components/BookList"; //4. Import the BookList Component

function App() {
  const [books, setBooks] = useState([]); //1,2. Os livros serão adicionados no array pelo BookCreate.

  const CreateBook = (title) => { //2,1. Create the Event Handler.
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]; //4. Adicione dentro do add function, a função para gerar um ID aleatório para seu livro, esse método não gera ID único, mas é o suficiente para a aplicação.
    setBooks(updatedBooks); //4.1 . Create the ADD function
  };

  return (
    <div className="app">
      <BookList books= {books}/> 
      <BookCreate onCreate={CreateBook} />
    </div>
  ); //2,3. Display the Prop CreateBook on App, can be any name (onOrange)
  //5.1 Chame o componente BookList para o JSX, com a prop Books.
}

export default App;
