import {
  ERROR_BOOKING_COVER_POST,
  GET_BOOKING_COVER_POST,
  LOADING_BOOKING_COVER_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  BookingCover: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKING_COVER_POST:
      return {
        ...state,
        BookingCover: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_BOOKING_COVER_POST:
      return {
        ...state,
        BookingCover: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_BOOKING_COVER_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        BookingCover: [],
      };
    default:
      return state;
  }
}
