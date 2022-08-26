import axios from "axios";
import { returnErrors } from "../message/message";
import { ERROR_MENU_POST, GET_MENU_POST, LOADING_MENU_POST } from "../types";

export const getMenu = () => (dispatch) => {
  dispatch({ type: LOADING_MENU_POST });
  axios
    .get("menu/MenuAPI/")
    .then((res) =>
      dispatch({
        type: GET_MENU_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_MENU_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
