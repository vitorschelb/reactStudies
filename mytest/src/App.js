import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "../src/images/logo.jpg"

function App() {
  return (
        <div>
          <nav>
            <Header logo = {logo} titulo="Titulo"/>
          </nav>
          <section>
            <h1>Primeira Seção</h1>
          </section>
          <section>
            <h1>Segunda Seção</h1>
          </section>
          <section>
            <h1>Terceira Seção</h1>
          </section>
          <footer>
            <Footer logo = "Logo" contato="Contato" />
          </footer>
          </div>
  );
}

export default App;