import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_TIMING_POST,
  GET_TIMING_POST,
  LOADING_TIMING_POST,
} from "../types";

export const getTiming = () => (dispatch, getState) => {
  dispatch({ type: LOADING_TIMING_POST });
  axios
    .get("content/TimingAPI/")
    .then((res) =>
      dispatch({
        type: GET_TIMING_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_TIMING_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
