import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  //4.2 Declarar a Prop que será recebida, "books"
  const renderedBooks = books.map((book) => {
    //4.3 Mapear books, e para cada book, irá retornar BookShow
    return <BookShow key={book.id} book={book} />; //4.4 Passe as chaves das props, para que possa ser chamado em outros componentes.
  });
  return <div className="book-list">{renderedBooks}</div>; //4.5 Da função Booklist, retorn os books renderizados.
}

export default BookList;

//15.7 Para acessar o componente Context, que por consequência abriga agora App como uma Children, que é uma Prop. Em vez de criar uma variável simples com o nome value, é preciso importar o OBJETO de Provider, no caso valueToShare, que é count e incrementCount. Count agora é o número e incrementCount é a função a ser chamada! Perceba que valueToShare foi DESESTRUTURADO, para que a função de incremento possa ser chamada através do botão.
//15.8 Agora no retorno não teremos mais {value} e sim o estado(que é um objeto de Provider), {count} e um botão que ativará o evento de incremento, tendo como callback incrementCount!
//RESUMO: Quando o usuário clica no button, é chamado incrementCount, que atualiza o estado count, como estamos atualizando um estado, o componente provider que o abriga, será renderizado junto com todas as suas children, ou seja, todos componentes que são children de App, também se tornaram children de Provider!

//17. BookList, passava as funções de APP para BookShow, agora elas não são mais necessárias. Remove-las. Ele só vai utilizar books, e para isso vamos fazer a função para comunicar com nosso context.
//17. IMPORTANTE: Como cada BookShow é 1 card que exibe um livro individual, é muito mais facil passar a prop do livro diretamente para ele sem context. Pois, caso fosse utilizar Context para comunicar, seria necessário criar uma forma de especificar qual livro de BookContext está sendo mostrado.

//18. Vamos fazer um hook simples, para refatorar o código e reutilizar algumas funcionalidades. No caso, como usamos a chamada const { books } = useContext(BooksContext); com frequencia, vamos refatora-la. Agora fica assim: const { books } = useBooksContext(); A função fica abrigada em use-books-context.js
//18.1 Agora que a função foi criada em um arquivo separado e exportada, deve-se importa-la e como as importações de useContext e bookscontext estão abrigadas dentro dela, pode-se deletar essas importações.
