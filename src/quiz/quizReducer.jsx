const STAGES = ["Start", "Category", "Playing", "End"];

export const initialState = {
  gameStage: STAGES[0],
  questions: [],
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    // seus cases aqui...
    default:
      return state;
  }
};
