import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function trackerReducer(state = initialState.charList, action) {
    switch (action.type) {
        case actions.ADD_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        default:
            return state;
    }
}