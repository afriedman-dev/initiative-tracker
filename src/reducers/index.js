import {combineReducers} from 'redux';
import characters from './characterReducer';
import tracker from './trackerReducer';

const rootReducer = combineReducers({
    characters, tracker
});

export default rootReducer;