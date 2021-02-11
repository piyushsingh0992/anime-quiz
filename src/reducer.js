export const initialState = {
  quiz: false,
  questions: []
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_QUES":
      return {
        ...state,
        questions: action.questions
      };

    case "SET_quiz":
      return {
        ...state,
        quiz: action.quiz
      };

    default:
      return state;
  }
};

export default reducer;
