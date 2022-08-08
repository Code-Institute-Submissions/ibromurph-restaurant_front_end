import {
  ERROR_ABOUT_US_POST,
  GET_ABOUT_US_POST,
  LOADING_ABOUT_US_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  AboutUsArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ABOUT_US_POST:
      return {
        ...state,
        AboutUsArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_ABOUT_US_POST:
      return {
        ...state,
        AboutUsArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_ABOUT_US_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        AboutUsArray: [],
      };
    default:
      return state;
  }
}
