import * as actions from './actionTypes';
import charactersApi from '../api/mockCharactersApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCharactersSuccess(characters){
    return { type: actions.LOAD_CHARACTERS_SUCCESS, characters};
}

export function createCharacterSuccess(char){
    return {type:actions.CREATE_CHARACTER_SUCCESS, char};
}

export function updateCharacterSuccess(char){
    return {type:actions.UPDATE_CHARACTER_SUCCESS, char};
}

//Thunks
export function loadCharacters(){
    return function(dispatch){
        dispatch(beginAjaxCall());

        return charactersApi.getAllCharacters().then(characters => {
            dispatch(loadCharactersSuccess(characters));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCharacter(char){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        
        return charactersApi.saveCharacter(char).then(savedChar => {
            char.id ? dispatch(updateCharacterSuccess(savedChar)) :
                dispatch(createCharacterSuccess(savedChar));
        }).catch(error => {
            throw(error);
        });
    };
}