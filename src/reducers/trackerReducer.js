import * as actions from '../actions/actionTypes';

export default function trackerReducer(state = charList, action) {
    switch (action.type) {
        case actions.ADD_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        default:
            return state;
    }
}

const charList = [];