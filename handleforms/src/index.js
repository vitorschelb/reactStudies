import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from './context/books'

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider >
    <App />
  </Provider>
);

//Somente os componentes renderizados dentro do context podem acessar os vaalores.
//15.5 Não é preciso agora exportar BooksContext, é preciso importar o State Provider, logo o wrap feito com BooksContext.Provider é substituído com Provider, não é preciso declarar valor, pois o valor já esta dentro dele! App automáticamente agora se tornou uma PROP de Provider, chamada de children, em outrar palavras, ela se tornou uma Prop Children de Provider.
// import BooksContext from './context/books' -> É retirado
//import { Provider } from './context/books' -> É incluido
//15.6 Agora é preciso atualizar BookList, para não só mostrar o valor anterior de exemplo de 5, mas mostrar o estado Count, e também um botão para ativar o evento que atualizara o Estado!
//15.7 Continua em BookList.js