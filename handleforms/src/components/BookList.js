import { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'


function BookList({books, onDelete, onEdit}) { //4.2 Declarar a Prop que será recebida, "books" 
    const {count, incrementCount} = useContext(BooksContext)

    const renderedBooks = books.map((book) => { //4.3 Mapear books, e para cada book, irá retornar BookShow
        return <BookShow onEdit = { onEdit} onDelete = {onDelete} key={book.id} book={book} /> //4.4 Passe as chaves das props, para que possa ser chamado em outros componentes.
    })
    return <div className='book-list'>
        {count}
        <button onClick={incrementCount}>
            Click
        </button>
        {renderedBooks}</div> //4.5 Da função Booklist, retorn os books renderizados. 
    
    }

    export default BookList

    //15.7 Para acessar o componente Context, que por consequência abriga agora App como uma Children, que é uma Prop. Em vez de criar uma variável simples com o nome value, é preciso importar o OBJETO de Provider, no caso valueToShare, que é count e incrementCount. Count agora é o número e incrementCount é a função a ser chamada! Perceba que valueToShare foi DESESTRUTURADO, para que a função de incremento possa ser chamada através do botão.
    //15.8 Agora no retorno não teremos mais {value} e sim o estado(que é um objeto de Provider), {count} e um botão que ativará o evento de incremento, tendo como callback incrementCount!
    //RESUMO: Quando o usuário clica no button, é chamado incrementCount, que atualiza o estado count, como estamos atualizando um estado, o componente provider que o abriga, será renderizado junto com todas as suas children, ou seja, todos componentes que são children de App, também se tornaram children de Provider!