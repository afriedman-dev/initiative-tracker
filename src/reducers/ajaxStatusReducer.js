import * as actions from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
   return type.substring(type.length - 8) === '_SUCCESS';
}

export default function characterReducer(
   state = initialState.ajaxCallsInProgress,
   action
) {
   if (action.type === actions.BEGIN_AJAX_CALL) {
      return state + 1;
   } else if (
      action.type === actions.AJAX_CALL_ERROR ||
      actionTypeEndsInSuccess(action.type)
   ) {
      return state - 1;
   }

   return state;
}
