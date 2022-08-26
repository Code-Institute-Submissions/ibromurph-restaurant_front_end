import {
  GET_LOGO,
  LOADING_LOGO,
  ERROR_LOGO,
} from "../types";
import axios from "axios";
import { returnErrors } from "../message/message";

const url = "content/BrandLogoAPI/";

export const getBrandLogo = () => (dispatch) => {
  dispatch({ type: LOADING_LOGO });
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_LOGO,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_LOGO });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
