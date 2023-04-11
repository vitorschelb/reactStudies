import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState( ''); //1. Ao criar o Create, é preciso setar um useState no input, pois cada vez será modificado.

  const handleChange = (event) => {
    //2.1 Criar um Handle Event para lidar com o evento de criação, event será o nome adicionado.
    setTitle(event.target.value);
  };
  // 2.2 Passa os argumentos para os paramentros no input, o titulo do useState e o handleChange.

  //3. Criar o botão de submite que vai trigar o evento de submeter do formulário, vai ativar o event handler, logo, vai chamar o onCreate e vai passar o Title desejado para a função.

  const handleSubmit = (event) => {
    event.preventDefault(); //3.1 Essa linha vai impedir que o browser atualize automático, antes de rodar o resto do código.
    onCreate(title); //3.2 Aqui chama a função citada no step 3.
    setTitle('')
  };

  return (
    <div className="book-create">
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
