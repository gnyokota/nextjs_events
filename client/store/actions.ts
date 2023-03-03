import {Data} from "pages/api/events";
import {Dispatch} from "redux";

const fetchRequest = () => ({
  type: "FETCH_REQUEST",
});

const fetchPostSuccess = (payload: Data[]) => ({
  type: "FETCH_REQUEST_SUCCESS",
  payload,
});

const fetchRequestError = () => ({
  type: "FETCH_REQUEST_ERROR",
});

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchRequest());
    const res = await fetch("http://localhost:3000/api/events");
    const evts = await res.json();
    dispatch(fetchPostSuccess(evts));
  } catch (error) {
    dispatch(fetchRequestError());
  }
};
