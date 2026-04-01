import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import PickCategory from "./components/PickCategory";
import Question from "./components/Question";
import GameOver from "./components/GameOver";


function App() {
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/category" element={<PickCategory />} />
        <Route path="/question" element={<Question />} />
        <Route path="/end" element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default App;
