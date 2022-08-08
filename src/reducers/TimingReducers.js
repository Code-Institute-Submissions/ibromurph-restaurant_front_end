import {
  ERROR_TIMING_POST,
  GET_TIMING_POST,
  LOADING_TIMING_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  TimingsArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TIMING_POST:
      return {
        ...state,
        TimingsArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_TIMING_POST:
      return {
        ...state,
        TimingsArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_TIMING_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        TimingsArray: [],
      };
    default:
      return state;
  }
}
