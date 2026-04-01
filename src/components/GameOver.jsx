import { useLocation, Link } from "react-router-dom";
import "../styles/GameOver.css";

function GameOver() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  const percentage = Math.round((score / total) * 100);

  let message = "";
  if (percentage === 100) {
    message = "Excelente! Você acertou todas!";
  } else if (percentage >= 70) {
    message = "Muito bom! Você mandou bem.";
  } else if (percentage >= 40) {
    message = "Você foi razoável, mas pode melhorar.";
  } else {
    message = "Não desanime! Continue praticando.";
  }

  // calcula número de estrelas (0 a 5)
  const stars = Math.round((percentage / 100) * 5);

  return (
    <div id="gameover">
      <h2>Fim do Quiz!</h2>
      <p>
        Você acertou {score} de {total} perguntas.
      </p>
      <p>Percentual de acertos: {percentage}%</p>
      <p className="message">{message}</p>

      {/* Ranking de estrelas */}
      <div className="stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < stars ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>

      <div className="buttons">
        <Link to="/">
          <button className="restart-btn">Reiniciar</button>
        </Link>
        <Link to="/category">
          <button className="play-again-btn">Jogar novamente</button>
        </Link>
      </div>

      <img src="/img/welldone.svg" alt="Parabéns" />
    </div>
  );
}

export default GameOver;
