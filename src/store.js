// application state tree held in a store
// reducers to receive actions

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// create store takes initial state as a parameter
const initialState = {};

//any middleware weneed to include could go here
const middleware = [thunk];

// use compose to include the snippet that enables redux devtools
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
