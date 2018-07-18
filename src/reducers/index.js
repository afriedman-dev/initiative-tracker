import { combineReducers } from 'redux';
import characters from './characterReducer';
import initiative from './initiativeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
   characters,
   initiative,
   ajaxCallsInProgress,
});

export default rootReducer;
