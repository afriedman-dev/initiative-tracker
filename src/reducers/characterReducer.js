import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

export default function characterReducer(
  state = initialState.characters,
  action
) {
  switch (action.type) {
    case actions.LOAD_CHARACTERS_SUCCESS:
      return action.characters;
    case actions.CREATE_CHARACTER_SUCCESS:
      return [...state, Object.assign({}, action.char)];
    case actions.UPDATE_CHARACTER_SUCCESS:
      return [
        ...state.filter(char => char.id !== action.char.id),
        Object.assign({}, action.char)
      ];
    default:
      return state;
  }
}
