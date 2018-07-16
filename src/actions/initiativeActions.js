import * as actions from './actionTypes';

export function addCharacter(char){
    return {type:actions.ADD_CHARACTER, char};
}

export function removeCharacter(char){
    return {type:actions.REMOVE_CHARACTER, char};
}

export function incrementInitiativeList(){
    return {type:actions.INCREMENT_INITIATIVE_LIST};
}

export function decrementInitiativeList(){
    return {type:actions.DECREMENT_INITIATIVE_LIST};
}