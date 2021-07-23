import { combineReducers } from 'redux';
import { newCarReducer } from "./newCarReducer";
import { registrationReducer } from "./registrationReducer";

export default combineReducers({
  user: registrationReducer,
  car: newCarReducer
});
