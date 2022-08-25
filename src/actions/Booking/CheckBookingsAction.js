import axios from "axios";
import { createMessage, returnErrors } from "../message/message";
import {
  LOADING_CHECK_BOOKINGS,
  GET_CHECK_BOOKING,
  ERROR_CHECK_BOOKING,
} from "../types";
import toast from "react-hot-toast";

const url = "booking/TableBookingAvailability/";

export const CheckAvailableBookings = (data) => (dispatch, getState) => {
  dispatch({ type: LOADING_CHECK_BOOKINGS });
  // toast.promise(
  axios
    .post(url, data)
    .then((res) => {
      dispatch({
        type: GET_CHECK_BOOKING,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_CHECK_BOOKING });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
  // {
  //   loading: "Loading available slots 1",
  //   success: "Slots available 2",
  //   error: (err) => err.response.data.details,
  // }
  // );
  // axios
  //   .post(url, data)
  //   .then((res) => {
  //     dispatch(createMessage(res.data));
  //     dispatch({
  //       type: GET_CHECK_BOOKING,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: ERROR_CHECK_BOOKING });
  //     dispatch(returnErrors(err.response.data, err.response.status));
  //   });
};
