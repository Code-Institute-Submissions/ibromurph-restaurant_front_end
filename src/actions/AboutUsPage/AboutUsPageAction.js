import {
  GET_ABOUT_US_PAGE,
  LOADING_ABOUT_US_PAGE,
  ERROR_ABOUT_US_PAGE,
} from "../types";
import axios from "axios";
import { returnErrors } from "../message/message";

const url = "content/ContactUSPageAPI/";

export const getAboutUsPage = () => (dispatch) => {
  dispatch({ type: LOADING_ABOUT_US_PAGE });
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_ABOUT_US_PAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_ABOUT_US_PAGE });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
