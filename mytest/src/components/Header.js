import "../styles/HeaderStyle.css";

function Header({ logo, titulo }) {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        <p>Eu sou o {titulo} do Header</p>
      </div>
    </div>
  );
}

export default Header;
