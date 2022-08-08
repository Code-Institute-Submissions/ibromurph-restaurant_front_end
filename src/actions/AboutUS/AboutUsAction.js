import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_ABOUT_US_POST,
  GET_ABOUT_US_POST,
  LOADING_ABOUT_US_POST,
} from "../types";

export const getAbout_Us = () => (dispatch, getState) => {
  dispatch({ type: LOADING_ABOUT_US_POST });
  axios
    .get("content/AboutUsAPI/")
    .then((res) =>
      dispatch({
        type: GET_ABOUT_US_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_ABOUT_US_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
