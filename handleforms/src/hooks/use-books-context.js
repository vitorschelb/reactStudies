import { useContext } from "react"
import BooksContext from "../context/books"


function useBooksContext() {
  return useContext(BooksContext)
}

export default useBooksContext

//18. É preciso importar o que ela utiliza, no caso useContext e BooksContext