import * as actions from '../actions/actionTypes';

export default function characterReducer(state = [], action) {
    switch (action.type) {
        case actions.CREATE_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        case actions.LOAD_CHARACTERS_SUCCESS:
            return  action.characters;
        default:
            return state;
    }
}