import { Link } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <Link to="/category">
        <button>Iniciar</button>
      </Link>
      <img src="/img/quiz.svg" alt="Quiz" />
    </div>
  );
}

export default Welcome;
