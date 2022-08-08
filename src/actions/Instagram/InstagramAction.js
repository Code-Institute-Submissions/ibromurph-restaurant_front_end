import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_INSTAGRAM_POST,
  GET_INSTAGRAM_POST,
  LOADING_INSTAGRAM_POST,
} from "../types";

export const getInstagramPosts = () => (dispatch, getState) => {
  dispatch({ type: LOADING_INSTAGRAM_POST });
  axios
    .get("content/InstagramPostAPI/")
    .then((res) =>
      dispatch({
        type: GET_INSTAGRAM_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_INSTAGRAM_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
