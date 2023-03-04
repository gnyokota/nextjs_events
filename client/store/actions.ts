import {Data} from "pages/api/events";
import {Dispatch} from "redux";

export const fetchRequest = () => ({
  type: "FETCH_REQUEST",
});

const fetchPostSuccess = (payload: Data[]) => ({
  type: "FETCH_REQUEST_SUCCESS",
  payload,
});

const fetchRequestError = () => ({
  type: "FETCH_REQUEST_ERROR",
});

export const fetchData = (evts: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchRequest());
    dispatch(fetchPostSuccess(evts));
  } catch (error) {
    dispatch(fetchRequestError());
  }
};
