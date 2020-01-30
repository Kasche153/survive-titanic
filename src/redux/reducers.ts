import { userResolver as user } from "./user-reducer";
import { questionReducer as question } from "./question-reducer";
import { combineReducers } from "redux";
export const allReducers = combineReducers({ user, question });
