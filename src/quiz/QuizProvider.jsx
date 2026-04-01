import { useReducer } from "react";
import { QuizContext } from "./quizContext";
import { quizReducer, initialState } from "./quizReducer";

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
