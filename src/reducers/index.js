import { combineReducers } from 'redux';
import authenicateReducer from './authentication';

const rootReducer = combineReducers({
  authenticated: authenicateReducer
});

export default rootReducer;
