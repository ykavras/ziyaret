import { combineReducers } from 'redux';
import visitsReducer from './visitsReducer';
import loginReducer from './loginReducer';
import servicesReducer from './servicesReducer';
import dealersReducer from './dealersReducer';
import notesReducer from './notesReducer';


export default combineReducers({
  visitsReducer,
  loginReducer,
  servicesReducer,
  dealersReducer,
  notesReducer
});
