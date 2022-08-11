import axios from "axios";
import { returnErrors } from "../message/message";
import {
  ERROR_BOOKING_COVER2_POST,
  GET_BOOKING_COVER2_POST,
  LOADING_BOOKING_COVER2_POST,
} from "../types";

export const getBookingCover2 = () => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKING_COVER2_POST });
  axios
    .get("booking/BookTable2CoverAPI/")
    .then((res) =>
      dispatch({
        type: GET_BOOKING_COVER2_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_BOOKING_COVER2_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
