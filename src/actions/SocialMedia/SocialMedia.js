import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_SOCIAL_MEDIA,
  GET_SOCIAL_MEDIA,
  LOADING_SOCIAL_MEDIA,
} from "../types";

export const getSocialMedia = () => (dispatch) => {
  dispatch({ type: LOADING_SOCIAL_MEDIA });
  axios
    .get("content/SocialMedia/")
    .then((res) =>
      dispatch({
        type: GET_SOCIAL_MEDIA,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_SOCIAL_MEDIA });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
