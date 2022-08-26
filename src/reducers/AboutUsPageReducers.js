import {
  GET_ABOUT_US_PAGE,
  LOADING_ABOUT_US_PAGE,
  ERROR_ABOUT_US_PAGE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  AboutUsPage: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ABOUT_US_PAGE:
      return {
        ...state,
        AboutUsPage: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_ABOUT_US_PAGE:
      return {
        ...state,
        AboutUsPage: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_ABOUT_US_PAGE:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        AboutUsPage: [],
      };
    default:
      return state;
  }
}
