import BookShow from './BookShow'

function BookList({books, onDelete}) { //4.2 Declarar a Prop que será recebida, "books" 
    const renderedBooks = books.map((book) => { //4.3 Mapear books, e para cada book, irá retornar BookShow
        return <BookShow onDelete = {onDelete} key={book.id} book={book} /> //4.4 Passe as chaves das props, para que possa ser chamado em outros componentes.
    })
    return <div className='book-list'>{renderedBooks}</div> //4.5 Da função Booklist, retorn os books renderizados. 
    }

    export default BookList