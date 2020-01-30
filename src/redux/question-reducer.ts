import { questionsModel } from "models/question-model-handler";

export const questionReducer = (
  state: any = {},
  action: { type: string; payload: object }
) => {
  if (action.type === "ADD_QUESTION")
    return { ...state, list: [questionsModel.getQuestions(), action.payload] };
  return state;
};

/**
 * dispatch({type: "SET_USERNAME", payload: "Erik" });
 *
 * REDUX = {username: "erik", userId: 12399}
 *
 *
 * <Component>
 *
 */
