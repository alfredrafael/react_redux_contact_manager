// root reducer: a meeting place for all of our reducers
// for each resource, we'd have a reducer
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// parameter for combineReducers: an opbject with all the reducers we
// need to combine.  The names assigned determine how we will access them throughout
// the application, i.e.  this.props.contact
export default combineReducers({
  contact: contactReducer
});
