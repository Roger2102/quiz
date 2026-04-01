import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import htmlData from "../data/questions_html";
import jsData from "../data/questions_js";
import "../styles/Question.css";

function Question() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || "HTML";

  const questions =
    category === "HTML" ? htmlData[0].questions : jsData[0].questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleFinish = () => {
    navigate("/end", { state: { score, total: questions.length } });
  };

  return (
    <div id="question">
      {!finished ? (
        <>
          <div className="scoreboard">
            <strong>Pontuação:</strong> {score}/{questions.length}
          </div>

          <h2>
            {category} - Pergunta {currentIndex + 1} de {questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          {currentQuestion.tip && <small>Dica: {currentQuestion.tip}</small>}
          <img src="/img/quiz.svg" alt="Pergunta" />
        </>
      ) : (
        <button className="finish-btn" onClick={handleFinish}>
          Finalizar
        </button>
      )}
    </div>
  );
}

export default Question;
