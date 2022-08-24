import {
  LOADING_BOOKING_DETAILS_EMAIL,
  GET_BOOKINGS_EMAIL,
  ERROR_BOOKING_DETAILS_EMAIL,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  cancelBookingsData: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS_EMAIL:
      return {
        ...state,
        cancelBookingsData: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_BOOKING_DETAILS_EMAIL:
      return {
        ...state,
        cancelBookingsData: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_BOOKING_DETAILS_EMAIL:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        cancelBookingsData: [],
      };
    default:
      return state;
  }
}
