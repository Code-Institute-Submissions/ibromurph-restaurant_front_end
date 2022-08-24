import {
  ERROR_BOOKING_DETAILS_BID,
  CANCEL_BOOKING_BID,
  CANCEL_BOOKING_BID_LOADING,
} from "../actions/types";

const initialState = {
  isCancelled: false,
  isFailed: false,
  isLoading: false,
  cancelArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case CANCEL_BOOKING_BID_LOADING:
      return {
        ...state,
        isCancelled: false,
        isLoading: true,
        isFailed: false,
      };
    case CANCEL_BOOKING_BID:
      return {
        ...state,
        isCancelled: true,
        isFailed: false,
        isLoading: false,
      };

    case ERROR_BOOKING_DETAILS_BID:
      return {
        ...state,
        isFailed: true,
        isCancelled: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
