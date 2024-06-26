import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
  authReducer,
  todoReducer,
});

export default rootReducer;
