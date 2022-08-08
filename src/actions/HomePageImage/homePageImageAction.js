import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_HOME_PAGE_IMG_POST,
  GET_HOME_PAGE_IMG_POST,
  LOADING_HOME_PAGE_IMG_POST,
} from "../types";

export const getHomePage = () => (dispatch, getState) => {
  dispatch({ type: LOADING_HOME_PAGE_IMG_POST });
  axios
    .get("content/HomePageImageAPI/")
    .then((res) =>
      dispatch({
        type: GET_HOME_PAGE_IMG_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_HOME_PAGE_IMG_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
