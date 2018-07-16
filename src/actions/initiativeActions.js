import * as actions from './actionTypes';

export function addCharacter(char){
    return {type:actions.ADD_CHARACTER, char};
}

export function removeCharacter(char){
    return {type:actions.REMOVE_CHARACTER, char};
}

export function incrementCharList(char){
    return {type:actions.INCREMENT_CHAR_LIST, char};
}

export function decrementCharList(char){
    return {type:actions.DECREMENT_CHAR_LIST, char};
}