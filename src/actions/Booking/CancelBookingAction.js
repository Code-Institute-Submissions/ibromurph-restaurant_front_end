import axios from "axios";
import { createMessage, returnErrors } from "../message/message";
import {
  ERROR_BOOKING_DETAILS_BID,
  CANCEL_BOOKING_BID,
  LOADING_BOOKING_DETAILS_EMAIL,
  ERROR_BOOKING_DETAILS_EMAIL,
  GET_BOOKINGS_EMAIL,
  CANCEL_BOOKING_BID_LOADING,
} from "../types";
import toast from "react-hot-toast";

export const CancelBookingViaBID = (BookingID) => (dispatch, getState) => {
  dispatch({ type: CANCEL_BOOKING_BID_LOADING });

  axios
    .put(`booking/CancelBookingBID/${BookingID}/`)
    .then((res) => {
      dispatch(createMessage({ deleteLead: "Booking Cancelled" }));
      dispatch({
        type: CANCEL_BOOKING_BID,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_BOOKING_DETAILS_BID });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const CancelBookingViaEmail = (Email) => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKING_DETAILS_EMAIL });
  // toast.promise(
    axios
      .get(`booking/CancelBookingEmail/${Email}/`)
      .then((res) => {
        dispatch(createMessage({ addLead: "Fetching Bookings" }));
        dispatch({
          type: GET_BOOKINGS_EMAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: ERROR_BOOKING_DETAILS_EMAIL });
        dispatch(returnErrors(err.response.data, err.response.status));
      })
    // {
    //   loading: "Fetching Bookings details",
    //   // success: "Bookings Cancelledxj",
    //   // error: (err) => err.response.data.details,
    // }
  // );
};
