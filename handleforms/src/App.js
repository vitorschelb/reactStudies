import { useState } from "react"; //1,1.Determinar o useState
import BookCreate from "./components/BookCreate"; //2,2. Import the Component.

function App() {
  const [books, setBooks] = useState([]); //1,2. Os livros serão adicionados no array pelo BookCreate.

  const HandleCreateBook = (title) => { //2,1. Create the Event Handler.
    console.log('Need to add this book:', title)
  }

  return <div><BookCreate onCreate={HandleCreateBook}/></div>; //2,3. Display the Prop CreateBook on App, can be any name (onOrange)
}

export default App;
