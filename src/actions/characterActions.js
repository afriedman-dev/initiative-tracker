import * as actions from './actionTypes';
import charactersApi from '../api/mockCharactersApi';

export function createCharacter(char){
    return {type:actions.CREATE_CHARACTER, char};
}

export function loadCharactersSuccess(characters){
    return { type: actions.LOAD_CHARACTERS_SUCCESS, characters};
}

export function loadCharacters(){
    return function(dispatch){
        return charactersApi.getAllCharacters().then(characters => {
            dispatch(loadCharactersSuccess(characters));
        }).catch(error => {
            throw(error);
        });
    }
}