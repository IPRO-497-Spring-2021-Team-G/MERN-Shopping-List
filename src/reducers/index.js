// Root reducer brings together all other reducers (auth reducer, error reducer)
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

// Pass an object with all reducers
export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});