import { combineReducers } from "redux";
import getUserReducer from "./getUserReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  form: reduxForm,
  user: getUserReducer
});
