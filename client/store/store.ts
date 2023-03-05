import {configureStore} from "@reduxjs/toolkit";
import {HYDRATE, createWrapper} from "next-redux-wrapper";

import reducer, {Action} from "./reducer";

const reducerInUse = reducer;

const masterReducer = (state: any, action: Action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducerInUse(state, action);
  }
};

const initStore = () => {
  return configureStore({
    reducer: masterReducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);
