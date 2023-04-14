import { useState } from "react"; //1,1.Determinar o useState
import BookCreate from "./components/BookCreate"; //2,2. Import the create Component.
import BookList from "./components/BookList"; //4. Import the BookList Component

function App() {
  const [books, setBooks] = useState([]); //1,2. Os livros serão adicionados no array pelo BookCreate.

  const editBookById = (id, newTitle) => {
    // 9. Vamos lá, a explicação de todo o processo esta no final do código. Aqui a função pega o ID do livro que é para ser alterado, e o NOVO titulo. A função irá trabalhar com esses parametros. É usada a constante de livros atualizados, a mesma que se usa para criar livros, é a que abri a lista, o array,  que é igual o array de livros que é percorrido por map, book by book, se ele encontrar um livro do array books, como o mesmo id, ele vai COPIAR todos os books, por isso o SPREAD,a propriedade título do OBJETO, será modificado para o newTitle. O setstate roda e então atualiza a constante de updatedBooks dentro de EditBookByID.
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    //6.1 Criar a função para deletar os livros no app, através de um filter.
    const deletedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBooks);
  };

  const CreateBook = (title) => {
    //2,1. Create the Event Handler.
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ]; //4. Adicione dentro do add function, a função para gerar um ID aleatório para seu livro, esse método não gera ID único, mas é o suficiente para a aplicação.
    setBooks(updatedBooks); //4.1 . Create the ADD function
  };

  return (
    <div className="app">
      <h1>Reading List</h1> 
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={CreateBook} />
    </div>
  ); //2,3. Display the Prop CreateBook on App, can be any name (onOrange). Passa a prop criada em app, para gerar o id aleatorio para cada titulo recebido. O componente BookCreate se trata do fomulario de envio da informação. A prop aqui apenas modifica o valor enviado!
  //5.1 Chame o componente BookList para o JSX, com a prop Books, enviando para o componente.
  //6.2 Crie a prop onDelete em BookList, ou seja, ela é enviada para Booklist.js, comunicando assim a função desejada para o outro componente, e por fim passe a função deleteBookById para ela,
  //11. É adicionado os elementos para fazer o display das imagens
}

export default App;

//9.   9. AGORA QUE O COMPONENTE BOOKEDIT EDITOU O LIVRO QUE È MOSTRADO POR BOOKSHOW, QUE POR CONSEQUENCIA VEM DE BOOK LIST E QUE ESTA EM APP.
// É PRECISO MODIFICAR COM O NOVO, MUDAR SEU ESTADO! ATUALIZA-LO!
// Para isso é criado uma CallBack function, um eventhandler em APP, ele vai então ser passado até bookedit,
// ENTÂAAAO, quando o usuário submeter o formulário, esse eventhandler vai COMUNICAR APP, para ATUALIZAR O OBJETO!
// edit
// O livro para ser modificado é encontrado pelo ID. O title é o novo titulo.
// A callBackfunction, ou eventhandler, é passado como uma prop para os outros componentes.
// A PROPriedade, vai ser chamada de onEdit, ela vai passar a função para booklist, de booklist para bookshow, então chegar em bookedit
