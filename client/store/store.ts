import {createStore, applyMiddleware, combineReducers} from "redux";
import {HYDRATE, createWrapper} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer, {Action} from "./reducer";
import thunk from "redux-thunk";

const combineReducer = combineReducers({
  reducer,
});

const masterReducer = (state: any, action: Action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      data: action.payload,
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

const initStore = () => {
  return createStore(
    masterReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const wrapper = createWrapper(initStore);
