import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const deletedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export default BooksContext;
export { Provider };

// const BooksContext = createContext();
// function Provider({ children }) {
//     const [count, setCount] = useState(5);

//     const valueToShare = {
//       count,
//       incrementCount: () => {
//         setCount(count + 1);
//       },
//     };

// };

// return (
//   <BooksContext.Provider value={valueToShare}>
//     {children}
//   </BooksContext.Provider>
// );
// }

//15.1 Criar o custom provider, com o estado para que a atualização seja dinamica. Mais sobr eisso no notion. A função é criada com uma prop chamada Children, que será explicada mais tarde.
//15.1 É criado a função de estado, com o estado count e a função para atualizar o estado.
//15.2 É criado o objeto que será compartilhado com o resto da aplicação. "valueToShare" Perceba que o valueToShare, abriga um objeto, esse objeto tem a propriedade count: count e uma função para iterar count. Essa função do objeto é feita diretamente com setCount para atualizar estado do objeto.
//15.3 O componente então vai retornar o JSX om o children wrapped pelo bookscontext. Explicação melhor sobre isso a seguir.
//15.4 Agora que temos um estado chamado Provider. É preciso exporta-lo, como BooksContext já é a exportação default, ele via ser exportado como named export.
//15.5 Continue em index.js

//16. Tá, chega de exemplos, mas como vamos decidir quais dados vamos usar o Context para compartilhar por toda aplicação?
//Importante lembrar que é preciso não só compartilhar como dado os estado, mas também é preciso compartilhar as funções que os atualizará.
//Primeiro: Precisamos diferenciar quais dados são "Application State" e quais são "Component(Local) State". Os termos são usados apenas para melhor desenhar a usabilidade dos diferentes estados usados no componentes.

//"Application State": Dados que são usados por muitos componentes diferentes.
//"Component(Local) State": Dados que são usados por poucos componentes.

//Após identificados os Estados que vão percorrer todos os componentes, que efetivamente alterará o comportamento dos componentes e não somente aquele que só tem o impacto interno do seu proprio componente, nós colocamos esses "Application State" dentro de um Provider, como o próprio nome já diz, ele proverá os estados para todos os componentes que farão uso destes dados.

//Depois vamos mudar os componentes que vão fazer uso do Provider e modificar a importação da Prop para a interação com o Provider.

//16.1 REFATORAR. Todas as funções de criação que serão modificadas vão ser salvar em comentário abaixo do componente.

//17 Agora EXPORTAMOS através da constante criada valueToShare, todas as funções, objetos, dados, tudo que é desejado comunicar pelos componentes.
