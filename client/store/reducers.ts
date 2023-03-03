import {Data} from "pages/api/events";

type InitialState = {
  data: Data[];
};

type Action = {
  type: string;
  payload?: Data[];
};

const initialState: InitialState = {
  data: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_REQUEST_SUCCESS":
      return {...state, data: action.payload};
    default:
      return state;
  }
};
