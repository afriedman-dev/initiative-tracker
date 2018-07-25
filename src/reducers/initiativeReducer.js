import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function initiativeReducer(
   state = initialState.initiative,
   action
) {
   switch (action.type) {
      case actions.ADD_CHARACTER: {
         let newChar = { ...action.char };
         newChar.id = newChar.id + '_' + Math.trunc(Math.random() * 1000);

         return Object.assign({}, state, {
            initiativeList: [...state.initiativeList, newChar],
         });
      }
      case actions.REMOVE_CHARACTER: {
         let newList = [...state.initiativeList];
         newList = newList.filter((_, i) => i !== action.index);

         return Object.assign({}, state, {
            initiativeList: newList,
         });
      }
      case actions.UPDATE_CHARACTER: {
         let newList = [...state.initiativeList];
         newList[action.index] = action.char;

         return Object.assign({}, state, {
            initiativeList: newList,
         });
      }
      case actions.SORT_INITIATIVE_LIST:
         return Object.assign({}, state, {
            initiativeList: state.initiativeList.sort(function(a, b) {
               return b.order - a.order;
            }),
         });
      case actions.INCREMENT_INITIATIVE_LIST: {
         let incList = [...state.initiativeList];
         let shiftedChar = incList.shift();

         incList.push(shiftedChar);

         return Object.assign({}, state, {
            initiativeList: incList,
            initiativeListIndex: state.initiativeListIndex + action.increment,
         });
      }
      case actions.DECREMENT_INITIATIVE_LIST: {
         let decList = [...state.initiativeList];
         let poppedChar = decList.pop();

         decList.unshift(poppedChar);

         return Object.assign({}, state, {
            initiativeList: decList,
            initiativeListIndex: action.newIndex,
         });
      }
      case actions.CALCULATE_PROGRESS:
         return state.initiativeList.length > 0
            ? Object.assign({}, state, {
                 progress:
                    (state.initiativeListIndex / state.initiativeList.length) *
                    100,
              })
            : state;
      case actions.RESET_INDEX:
         return Object.assign({}, state, { initiativeListIndex: 0 });
      case actions.UPDATE_TURN_COUNT:
         return Object.assign({}, state, {
            turn: state.turn + action.increment,
         });
      default:
         return state;
   }
}
