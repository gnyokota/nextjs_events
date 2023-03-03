import {createStore, applyMiddleware, combineReducers} from "redux";
import {createWrapper} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";

const combineReducer = combineReducers({});

const initStore = () => {
  return createStore(combineReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
