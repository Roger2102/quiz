import { useNavigate } from "react-router-dom";
import "../styles/PickCategory.css";

function PickCategory() {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    // envia a categoria escolhida como parâmetro na rota
    navigate("/question", { state: { category } });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <div className="options">
        <button onClick={() => handleCategory("HTML")}>HTML</button>
        <button onClick={() => handleCategory("JavaScript")}>JavaScript</button>
      </div>
      <img src="/img/category.svg" alt="Categoria" />
    </div>
  );
}

export default PickCategory;
