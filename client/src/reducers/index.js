import { combineReducers } from 'redux';
import loginReducer from './login';
import registrationReducer from './registration';


export default combineReducers({
  login: loginReducer,
  registration: registrationReducer
});
