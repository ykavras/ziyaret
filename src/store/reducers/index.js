import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import loginReducer from './loginReducer';


export default combineReducers({
  exampleReducer,
  loginReducer
});
