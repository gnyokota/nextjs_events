import {createStore, applyMiddleware, combineReducers} from "redux";
import {createWrapper} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./reducer";
import thunk from "redux-thunk";

const combineReducer = combineReducers({
  reducer,
});

const initStore = () => {
  return createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const wrapper = createWrapper(initStore);
