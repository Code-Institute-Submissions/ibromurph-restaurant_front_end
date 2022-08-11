import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_MENU_PAGE_IMG_POST,
  GET_MENU_PAGE_IMG_POST,
  LOADING_MENU_PAGE_IMG_POST,
} from "../types";

export const getMenuCarousel = () => (dispatch, getState) => {
  dispatch({ type: LOADING_MENU_PAGE_IMG_POST });
  axios
    .get("menu/MenuCarouselAPI/")
    .then((res) =>
      dispatch({
        type: GET_MENU_PAGE_IMG_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_MENU_PAGE_IMG_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
