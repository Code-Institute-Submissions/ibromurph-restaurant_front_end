import {
  ADD_CONTACTED_US,
  CONTACTED_US_LOADING,
  ERROR_CONTACTED_US,
} from "../types";
import axios from "axios";
import { createMessage, returnErrors } from "../message/message";

const url = "content/ContactedUSAPI/";

export const addContactDetails = (data) => (dispatch, getState) => {
  dispatch({ type: CONTACTED_US_LOADING });
  axios
    .post(url, data)
    .then((res) => {
      dispatch(createMessage({ addLead: "Message sent" }));
      dispatch({
        type: ADD_CONTACTED_US,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_CONTACTED_US });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
