import * as actions from './actionTypes';

export function createCharacter(char){
    return {type:actions.CREATE_CHARACTER, char};
}