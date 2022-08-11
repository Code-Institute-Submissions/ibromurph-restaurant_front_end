import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_BOOKING_COVER_POST,
  GET_BOOKING_COVER_POST,
  LOADING_BOOKING_COVER_POST,
} from "../types";

export const getBookingCover = () => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKING_COVER_POST });
  axios
    .get("booking/BookTableCoverAPI/")
    .then((res) =>
      dispatch({
        type: GET_BOOKING_COVER_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_BOOKING_COVER_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
