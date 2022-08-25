import {
  LOADING_CHECK_BOOKINGS,
  GET_CHECK_BOOKING,
  ERROR_CHECK_BOOKING,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  CheckBookingArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHECK_BOOKING:
      return {
        ...state,
        CheckBookingArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_CHECK_BOOKINGS:
      return {
        ...state,
        CheckBookingArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_CHECK_BOOKING:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        CheckBookingArray: [],
      };
    default:
      return state;
  }
}
