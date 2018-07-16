import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function initiativeReducer(state = initialState.initiative, action) {
    switch (action.type) {
        case actions.ADD_CHARACTER:
            return Object.assign({}, state,
                { initiativeList: [...state.initiativeList, action.char] });
        case actions.INCREMENT_INITIATIVE_LIST:
            return Object.assign({}, state,
                { turn: action.turn });
        default:
            return state;
    }
}