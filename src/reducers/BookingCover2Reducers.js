import {
  ERROR_BOOKING_COVER2_POST,
  GET_BOOKING_COVER2_POST,
  LOADING_BOOKING_COVER2_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  BookingCover2: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKING_COVER2_POST:
      return {
        ...state,
        BookingCover2: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_BOOKING_COVER2_POST:
      return {
        ...state,
        BookingCover2: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_BOOKING_COVER2_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        BookingCover2: [],
      };
    default:
      return state;
  }
}
