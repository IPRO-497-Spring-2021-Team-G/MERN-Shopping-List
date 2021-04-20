// Root reducer brings together all other reducers (auth reducer, error reducer)
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

// Pass an object with all reducers
export default combineReducers({
    item: itemReducer
});