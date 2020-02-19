import * as types from "../actions/actionTypes";
import intialState from "./initialState";

export default function authorReducer(state = intialState.authors, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
