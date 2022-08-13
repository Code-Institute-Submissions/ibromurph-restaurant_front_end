import axios from "axios";
import { createMessage, returnErrors } from "../message/message";
import {
  ADD_BOOKING,
  BOOKING_DELETED,
  ERROR_BOOKINGS_POST,
  GET_BOOKINGS_POST,
  LOADING_BOOKINGS_POST,
  UPDATE_BOOKING,
} from "../types";

const url = "booking/TableBookingAPI/";
export const getBookings = () => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKINGS_POST });
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_BOOKINGS_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: ERROR_BOOKINGS_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteBooking = (id) => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKINGS_POST });
  axios
    .delete(url + `${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteLead: "Booking Cancelled" }));
      dispatch({
        type: BOOKING_DELETED,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_BOOKINGS_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
export const addBooking = (data) => (dispatch, getState) => {
  console.log(data,"here")
  dispatch({ type: LOADING_BOOKINGS_POST });
  axios
    .post(url, data)
    .then((res) => {
      dispatch(createMessage({ addLead: "Booking Added" }));
      dispatch({
        type: ADD_BOOKING,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_BOOKINGS_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
export const updateBooking = (id, data) => (dispatch, getState) => {
  dispatch({ type: LOADING_BOOKINGS_POST });
  axios
    .put(url + `${id}/`, data)
    .then((res) => {
      dispatch(createMessage({ addLead: "Booking Updated" }));
      dispatch({
        type: UPDATE_BOOKING,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_BOOKINGS_POST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
