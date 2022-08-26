import { GET_FIND_US, FIND_US_LOADING, ERROR_FIND_US } from "../types";
import axios from "axios";
import { returnErrors } from "../message/message";

const url = "content/ContactUsAPI/";

export const getFindUs = () => (dispatch) => {
  dispatch({ type: FIND_US_LOADING });
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_FIND_US,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_FIND_US });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
