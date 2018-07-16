import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function initiativeReducer(state = initialState.initiative, action) {
    switch (action.type) {
        case actions.ADD_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        default:
            return state;
    }
}