import {
  ADD_CONTACTED_US,
  CONTACTED_US_LOADING,
  ERROR_CONTACTED_US,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  CheckBookingArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACTED_US:
      return {
        ...state,
        CheckBookingArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case CONTACTED_US_LOADING:
      return {
        ...state,
        CheckBookingArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_CONTACTED_US:
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
