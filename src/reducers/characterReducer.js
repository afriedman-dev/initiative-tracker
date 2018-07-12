import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function characterReducer(state = initialState.characters, action) {
    switch (action.type) {
        case actions.CREATE_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        case actions.LOAD_CHARACTERS_SUCCESS:
            return  action.characters;
        default:
            return state;
    }
}