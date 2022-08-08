import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_CAROUSEL_POST,
  GET_CAROUSEL_POST,
  LOADING_CAROUSEL_POST,
} from "../types";

export const getCarousel = () => (dispatch, getState) => {
  dispatch({ type: LOADING_CAROUSEL_POST });
  axios
    .get("content/CarouselAPI/")
    .then((res) =>
      dispatch({
        type: GET_CAROUSEL_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_CAROUSEL_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
