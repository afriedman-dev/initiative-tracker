import {combineReducers} from 'redux';
import characters from './characterReducer';
import tracker from './trackerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    characters, 
    tracker, 
    ajaxCallsInProgress
});

export default rootReducer;